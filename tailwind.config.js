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
            },
        },
    },
    plugins: [],
};
