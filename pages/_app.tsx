import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'lib/theme';
import { SnackbarProvider, ProviderContext } from 'notistack';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);
    const notistackRef = React.createRef<ProviderContext>();

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
