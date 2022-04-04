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
                'l-img': 'var(--l-img)' /* фон сайта */,
                'l-m-img': 'var(--l-m-img)',
                'd-img': 'var(--d-img)' /* фон сайта */,
                'd-m-img': 'var(--d-m-img)',
            },
            colors: {
                'd-page': 'var(--d-page)',

                'l-toggle': 'var(--l-toggle-theme)',
                'l-h-toggle': 'var(--l-h-toggle-theme)',
                'd-toggle': 'var(--d-toggle-theme)',
                'd-h-toggle': 'var(--d-h-toggle-theme)',
                'd-toggle-svg': 'var(--d-toggle-svg)',

                'l-logo-circle': 'var(--l-logo-circle)',
                'd-logo-circle': 'var(--d-logo-circle)',

                'l-menu-circle': 'var(--l-menu-circle)',
                'l-a-menu-circle': 'var(--l-a-menu-circle)',
                'l-menu-svg': 'var(--l-menu-svg)',
                'l-menu-text': 'var(--l-menu-text)',
                'd-menu-circle': 'var(--d-menu-circle)',
                'd-a-menu-circle': 'var(--d-a-menu-circle)',
                'd-menu-svg': 'var(--d-menu-svg)',
                'd-a-menu-svg': 'var(--d-a-menu-svg)',
                'd-menu-text': 'var(--d-menu-text)',
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
