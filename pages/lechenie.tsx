import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import Title from '@/components/ui/title';

const Lechenie: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Лечение в Пятигорске : Профиль Санатория &quot;Родник&quot;
                    г. Пятигорск - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Лечение в Пятигорске, курортный отдых в ${Sanatorium.orgFullName} по низким ценам в Пятигорске. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Лечение в санатории</Title>
        </>
    );
};

export default Lechenie;
