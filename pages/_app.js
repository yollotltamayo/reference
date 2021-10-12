import '../styles/globals.css'
import getUser from '../components/getUser';
import Head from 'next/head';
import {useEffect,useState} from 'react';
import {SessionProvider} from "next-auth/react"
import Navbar from '../components/Navbar/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import style from '../styles/_App.module.css'

function MyApp({ Component, pageProps:{session, ...pageProps }}) {

    const theme = createTheme({
        palette: {
            type: "light",
        }
    })

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <SessionProvider session={session}>
                <ThemeProvider theme={theme}>
                    <div className={style.container}>
                        <Navbar/>
                        <Component {...pageProps} />
                    </div>
                </ThemeProvider>
            </SessionProvider >
            </>
    )
}

export default MyApp


