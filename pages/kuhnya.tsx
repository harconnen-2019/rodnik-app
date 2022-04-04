import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';

const Kuhnya: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Лечебное питание в Санатории &quot;Родник&quot;, Заказное
                    меню, - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Лечебное питание, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <h1>Лечебное питание в санатории</h1>
        </>
    );
};

export default Kuhnya;
