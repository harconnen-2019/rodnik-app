import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';
import { dataNomera } from '../data/data-nomera';
import Nomer from '../components/nomer';

const Nomera: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Номерной фонд Санатория &quot;Родник&quot; г. Пятигорск -
                    Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Номерной фонд, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <h1>Номерной фонд санатория</h1>
            {dataNomera.map((nomer) => (
                <Nomer key={nomer.id} nomer={nomer} />
            ))}
        </>
    );
};

export default Nomera;