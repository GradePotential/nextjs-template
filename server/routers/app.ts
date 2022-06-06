import { createRouter } from 'server/createRouter';
import superjson from 'superjson';

export const appRouter = createRouter()
    .transformer(superjson)
    .query('hello', {
        resolve: async () => ({
            name: 'world',
            ts: new Date(),
        }),
    });

export type AppRouter = typeof appRouter;
