import { type BuildTag } from '@/app/(builds)/_types/build-tag';

export const ALL_BUILD_TAGS: BuildTag[] = [
  {
    label: 'Melee',
    value: 'Melee',
    colors: {
      bg: 'bg-yellow-400/10',
      hover: 'hover:bg-yellow-400/20',
      text: 'text-yellow-700 dark:text-yellow-500',
    },
  },
  {
    label: 'Ranged',
    value: 'Ranged',
    colors: {
      bg: 'bg-green-400/10',
      hover: 'hover:bg-green-400/20',
      text: 'text-green-700 dark:text-green-500',
    },
  },
  {
    label: 'Mods',
    value: 'Mods',
    colors: {
      bg: 'bg-blue-400/10',
      hover: 'hover:bg-blue-400/20',
      text: 'text-blue-600 dark:text-blue-500',
    },
  },
  {
    label: 'Skills',
    value: 'Skills',
    colors: {
      bg: 'bg-indigo-400/10',
      hover: 'hover:bg-indigo-400/20',
      text: 'text-indigo-600 dark:text-indigo-500',
    },
  },
  {
    label: 'Status Effects',
    value: 'StatusEffects',
    colors: {
      bg: 'bg-purple-400/10',
      hover: 'hover:bg-purple-400/20',
      text: 'text-purple-600 dark:text-purple-400',
    },
  },
  {
    label: 'Support',
    value: 'Support',
    colors: {
      bg: 'bg-pink-400/10',
      hover: 'hover:bg-pink-400/20',
      text: 'text-pink-700 dark:text-pink-500',
    },
  },
  {
    label: 'Tank',
    value: 'Tank',
    colors: {
      bg: 'bg-red-400/10',
      hover: 'hover:bg-red-400/20',
      text: 'text-red-700 dark:text-red-500',
    },
  },
];
