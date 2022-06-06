import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import type { AppRouter } from 'server/routers/app';
import 'lib/global.css';

function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <>
            <Head>
                <title>GP Template Site</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default withTRPC<AppRouter>({
    config() {
        const url = process.browser
            ? '/api/trpc'
            : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/api/trpc`
            : 'http://localhost:3000/api/trpc';

        return { url };
    },

    ssr: false,
})(MyApp);
