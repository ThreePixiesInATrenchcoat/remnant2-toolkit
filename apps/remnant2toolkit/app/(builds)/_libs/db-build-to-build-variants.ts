import { isErrorResponse } from '@/app/_libs/is-error-response';
import { getBuild } from '@/app/(builds)/_actions/get-build';
import { getBuildVariantIds } from '@/app/(builds)/_actions/get-build-variant-ids';
import { cleanUpBuildState } from '@/app/(builds)/_libs/clean-up-build-state';
import { dbBuildToBuildState } from '@/app/(builds)/_libs/db-build-to-build-state';
import { syncBuildVariantsToBuild } from '@/app/(builds)/_libs/sync-build-variants-to-build';
import { type BuildState } from '@/app/(builds)/_types/build-state';
import { type DBBuild } from '@/app/(builds)/_types/db-build';

export async function dbBuildToBuildVariants(
  build: DBBuild,
): Promise<BuildState[]> {
  const { buildVariants: buildVariantsIdsResponse } = await getBuildVariantIds(
    build.id,
  );

  // Need to loop over each id and fetch the build
  const buildVariantsBuildResponse = await Promise.all(
    buildVariantsIdsResponse.map((buildVariant) =>
      getBuild(buildVariant.buildId),
    ),
  );

  let buildVariants: BuildState[] = [];
  for (const response of buildVariantsBuildResponse) {
    // if there is an error, remover item from array
    if (!isErrorResponse(response)) {
      buildVariants.push(
        cleanUpBuildState(dbBuildToBuildState(response.build)),
      );
    }
  }
  // Add main build to the start
  buildVariants.unshift(cleanUpBuildState(dbBuildToBuildState(build)));

  // loop through build variants and copy videoUrl and buildLink from the main build to each variant
  buildVariants = syncBuildVariantsToBuild({
    build: buildVariants[0] as BuildState,
    buildVariants: buildVariants.slice(1),
  });

  return buildVariants;
}
