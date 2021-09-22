import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, Button, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme, { createEmotionCache } from 'lib/theme';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    const notistackRef = React.createRef<SnackbarProvider>();
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>GP Template Site</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    ref={notistackRef}
                    action={key => (
                        <Button
                            onClick={() =>
                                notistackRef.current?.closeSnackbar(key)
                            }
                        >
                            Dismiss
                        </Button>
                    )}
                >
                    <CssBaseline />
                    <Component {...pageProps} />
                </SnackbarProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}
