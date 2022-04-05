import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
                {/*<link*/}
                {/*    rel="preconnect"*/}
                {/*    href="https://fonts.gstatic.com"*/}
                {/*    crossOrigin*/}
                {/*/>*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-white dark:bg-d-page text-slate-700 dark:text-slate-400">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
