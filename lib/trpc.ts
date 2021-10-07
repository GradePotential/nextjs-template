import { createReactQueryHooks } from '@trpc/react';
import { inferProcedureInput, inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from 'pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
export const useQuery = trpc.useQuery;
export const useMutation = trpc.useMutation;
export const useInfiniteQuery = trpc.useInfiniteQuery;

export type inferQueryOutput<
    TRouteKey extends keyof AppRouter['_def']['queries'],
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;

export type inferQueryInput<
    TRouteKey extends keyof AppRouter['_def']['queries'],
> = inferProcedureInput<AppRouter['_def']['queries'][TRouteKey]>;
