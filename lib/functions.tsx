export enum ThemeName {
    DARK = 'dark',
    LIGHT = 'light',
}

export class ThemeSite {
    static getMediaQueryPreference = () => {
        const mql = window.matchMedia(
            `(prefers-color-scheme: ${ThemeName.DARK})`
        );
        return mql.matches ? ThemeName.DARK : ThemeName.LIGHT;
    };

    static storeUserSetPreference = (pref: string) => {
        pref === ThemeName.DARK
            ? document.documentElement.classList.add(ThemeName.DARK)
            : document.documentElement.classList.remove(ThemeName.DARK);

        localStorage.setItem('theme', pref);
    };

    static getUserSetPreference = () => {
        return localStorage.getItem('theme');
    };
}
