import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import { dataNomera } from '@/data/data-nomera';
import Nomer from '@/components/nomer';
import Title from '@/components/ui/title';

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
                    content={`Номерной фонд, курортный отдых в ${Sanatorium.orgFullName} по низким ценам в Пятигорске. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Номерной фонд санатория</Title>
            <div className="lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid gap-x-5 gap-y-8">
                {dataNomera.map((nomer) => (
                    <Nomer key={nomer.id} nomer={nomer} />
                ))}
            </div>
        </>
    );
};

export default Nomera;
