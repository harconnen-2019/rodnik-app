import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '@/components/ui/layout';
import { VERSION } from '@/lib/config';
import { ThemeName, ThemeSite } from '@/lib/functions';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? localStorage.theme : undefined
    );
    console.log(VERSION);

    /**
     * Проверить выбранную тему сайта
     * Добавить стиль темной темы в DOOM
     */
    useEffect(() => {
        const userSetPreference = ThemeSite.getUserSetPreference();
        if (userSetPreference !== null) {
            setTheme(userSetPreference);
        } else {
            const mediaQueryPreference = ThemeSite.getMediaQueryPreference();
            setTheme(mediaQueryPreference);
        }
    }, []);

    useEffect(() => {
        if (theme !== undefined) {
            if (theme === ThemeName.DARK) {
                ThemeSite.storeUserSetPreference(ThemeName.DARK);
            } else {
                ThemeSite.storeUserSetPreference(ThemeName.LIGHT);
            }
        }
    }, [theme]);

    return (
        <Layout theme={theme} setTheme={setTheme}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
