import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
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
                    content={`Как с нами связаться, курортный отдых в ${Sanatorium.orgFullName} по низким ценам в Пятигорске. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Наши контакты</Title>
        </>
    );
};

export default Contacts;
