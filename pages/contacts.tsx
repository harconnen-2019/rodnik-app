import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';
import Title from '@/components/ui/title';

const Contacts: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Контакты и координаты Санатория &quot;Родник&quot; г.
                    Пятигорск - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Как с нами связаться, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>Наши контакты</Title>
        </>
    );
};

export default Contacts;
