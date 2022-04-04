import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';

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
                    content={`Документы для заезда в Санаторий, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <h1>Документы для заезда в санаторий</h1>
        </>
    );
};

export default Documents;
