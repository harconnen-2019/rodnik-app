import { Html, Head, Main, NextScript } from 'next/document';

function setInitialColorMode() {
    /**
     * Создать стиль сайта (времена года) в зависимости от месяца
     * Вабрать одну из 4 тем сайта
     */
    function getSeason() {
        let result;
        switch (new Date().getMonth()) {
            // case 0:
            // case 1:
            // case 11:
            //     result = 'winter';
            //     break;
            case 2:
            case 3:
            case 4:
                result = 'spring';
                break;
            case 5:
            case 6:
            case 7:
                result = 'summer';
                break;
            case 8:
            case 9:
            case 10:
                result = 'autumn';
                break;
            default:
                result = 'winter';
        }
        return result;
    }

    function getInitialColorMode() {
        /**
         * Если пользователь явно выбрал светлое или темное,
         * используем тему. В противном случае это значение будет null.
         */
        const preference = window.localStorage.getItem('theme');
        const hasExplicitPreference = typeof preference === 'string';

        if (hasExplicitPreference) return preference;

        // Если нет сохраненных предпочтений, используется медиа-запрос
        // По умолчанию 'light'.
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        return mql.matches ? 'dark' : 'light';
    }
    // Создаем HTML атрибут с текущим сезоном
    const themeSeason = getSeason();
    document.documentElement.classList.add(`theme-${themeSeason}`);

    // Создаем HTML атрибут если dark режим
    if (getInitialColorMode() === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-white dark:bg-d-page text-slate-700 dark:text-slate-400">
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function() {
	                                ${setInitialColorMode.toString()}
                                    setInitialColorMode();
                                })()`,
                    }}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
