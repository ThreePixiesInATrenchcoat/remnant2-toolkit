import NextAuth from 'next-auth/next';

import { authOptions } from '@/app/(features)/auth/configs/authOptions';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
