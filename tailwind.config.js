module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            height: {
                550: '550px',
                628: '628px',
            },
            backgroundImage: {
                'light-img': 'var(--img-light)' /* фон сайта */,
                'light-img-mobile': 'var(--img-light-mobile)',
                'dark-img': 'var(--img-dark)' /* фон сайта */,
                'dark-img-mobile': 'var(--img-dark-mobile)',
                'logo-light': 'var(--logo-light)',
                'logo-dark': 'var(--logo-dark)',
            },
            colors: {
                'd-page': 'var(--d-page)',

                'l-toggle': 'var(--l-toggle-theme)',
                'l-h-toggle': 'var(--l-h-toggle-theme)',
                'd-toggle': 'var(--d-toggle-theme)',
                'd-h-toggle': 'var(--d-h-toggle-theme)',
                'd-toggle-svg': 'var(--d-toggle-svg)',

                'light-logo-circle': 'var(--circle-logo-light)',
                'dark-logo-circle': 'var(--circle-logo-dark)',

                'menu-circle-light': 'var(--menu-circle-light)',
                'menu-svg-light': 'var(--menu-svg-light)',
                'menu-svg-light-active': 'var(--menu-svg-light-active)',
                'menu-text-light': 'var(--menu-text-light)',
                'menu-circle-dark': 'var(--menu-circle-dark)',
                'menu-svg-dark': 'var(--menu-svg-dark)',
                'menu-svg-dark-active': 'var(--menu-svg-dark-active)',
                'menu-text-dark': 'var(--menu-text-dark)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
