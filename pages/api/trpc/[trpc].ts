import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

const appRouter = trpc
    .router()
    .middleware(async ({ path, type, next }) => {
        const start = Date.now();
        const result = await next();
        const durationMs = Date.now() - start;
        result.ok
            ? console.log('OK request timing:', { path, type, durationMs })
            : console.log('Non-OK request timing', { path, type, durationMs });

        return result;
    })
    .query('hello', {
        input: z
            .object({
                name: z.string().nullable(),
            })
            .nullable(),
        async resolve({ input }) {
            await new Promise<void>(resolve => {
                setTimeout(() => resolve(), 2000);
            });
            return {
                greeting: `Hello ${input?.name ?? 'World'}`,
            };
        },
    })
    .mutation('log', {
        input: z.string(),
        resolve: ({ input }) => {
            console.log(input);
        },
    });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
