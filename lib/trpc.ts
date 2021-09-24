import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
export const useQuery = trpc.useQuery;
export const useMutation = trpc.useMutation;
export const useInfiniteQuery = trpc.useInfiniteQuery;
