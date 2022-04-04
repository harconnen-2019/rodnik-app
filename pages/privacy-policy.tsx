import type { NextPage } from 'next';
import Head from 'next/head';
import { NAME_COMPANY, PRIMARY_PHONE } from '../config';

const Policy: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {NAME_COMPANY} Официальный сайт. Политика конфиденциальности
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${NAME_COMPANY} по приемлемым ценам. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <h1>Политика конфиденциальности</h1>
        </>
    );
};

export default Policy;
