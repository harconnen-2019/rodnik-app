import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import Title from '@/components/ui/title';

const Dosug: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Ваш досуг в Санатории &quot;Родник&quot; - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Ваш досуг, курортный отдых в ${Sanatorium.orgFullName} по низким ценам в Пятигорске. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Организация досуга</Title>
        </>
    );
};

export default Dosug;
