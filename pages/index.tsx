import type { NextPage } from 'next';
import Head from 'next/head';
import { NAME_COMPANY, PRIMARY_PHONE } from '../config';
// import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {NAME_COMPANY} Официальный сайт. Санаторное лечение
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${NAME_COMPANY} по приемлемым ценам. Наш телефон: ${PRIMARY_PHONE}`}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*<h1 className="text-3xl font-bold underline text-primary">*/}
            {/*    Welcome hello 222 ! to <a href="https://nextjs.org">Next.js!</a>*/}
            {/*</h1>*/}
        </>
    );
};

export default Home;
