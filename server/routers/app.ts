import { createRouter } from 'server/createRouter';

export const appRouter = createRouter().query('hello', {
    resolve: async () => 'world',
});

export type AppRouter = typeof appRouter;
