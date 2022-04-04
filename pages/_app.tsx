import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/ui/layout';
import { VERSION } from '../config';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? localStorage.theme : 'light'
    );

    console.log(VERSION);

    /**
     * Создать стиль сайта (времена года) в зависимости от месяца
     * Вабрать одну из 4 тем сайта
     */
    useEffect(() => {
        let theme;
        switch (new Date().getMonth()) {
            case 0:
            case 1:
            case 11:
                theme = 'winter';
                break;
            case 2:
            case 3:
            case 4:
                theme = 'spring';
                break;
            case 5:
            case 6:
            case 7:
                theme = 'summer';
                break;
            case 8:
            case 9:
            case 10:
                theme = 'autumn';
                break;
            default:
                theme = 'winter';
        }
        document.documentElement.classList.add(`theme-${theme}`);
    }, []);

    /**
     * Проверить выбранную тему сайта
     * Добавить стиль темной темы в DOOM
     */
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof window !== 'undefined') {
            theme === 'dark'
                ? localStorage.setItem('theme', 'dark')
                : localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <Layout theme={theme} setTheme={setTheme}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
