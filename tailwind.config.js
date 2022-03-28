module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            height: {
                550: '550px',
                628: '628px',
            },
            backgroundImage: {
                'header-texture': 'var(--header-bg)',
                'logo-white': 'var(--logo-white)',
            },
            colors: {
                'logo-slice': 'var(--color-bg-logo)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
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
        },
    },
    plugins: [],
};
