import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import Title from '@/components/ui/title';

const Documents: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Документы для заезда в Санаторий &quot;Родник&quot; -
                    Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Документы для заезда в Санаторий, курортный отдых в ${Sanatorium.orgFullName} по низким ценам в Пятигорске. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Документы для заезда в санаторий</Title>
        </>
    );
};

export default Documents;
