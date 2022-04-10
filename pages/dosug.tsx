import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';
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
                    content={`Ваш досуг, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>Организация досуга</Title>
        </>
    );
};

export default Dosug;
