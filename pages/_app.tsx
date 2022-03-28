import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/ui/layout';
import { VERSION } from '../config';

function MyApp({ Component, pageProps }: AppProps) {
    console.log(VERSION);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
