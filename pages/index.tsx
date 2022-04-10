import type { NextPage } from 'next';
import Head from 'next/head';
import { NAME_COMPANY, PRIMARY_PHONE } from '../config';
import Nomer from '../components/nomer';
import { dataNomera } from '@/data/data-nomera';
// import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {NAME_COMPANY} Официальный сайт. Санаторное лечение
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${NAME_COMPANY} по приемлемым ценам. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <h2 className="font-display text-4xl">
                Комфортное размещение отдыхающих
            </h2>
            <p>
                Санаторий «РОДНИК» предлагает: одноместные номера, (вкл.
                повышенной комфортности), двухместные номера (вкл. класса
                «Люкс»), номера класса «апартамент».
                <br />В санатории на лечении могут находиться одновременно до
                600 человек.
            </p>
            <p>Круглогодично возможно лечение и отдых родителей с детьми.</p>
            <p>Питание и лечение включено</p>
            <Nomer nomer={dataNomera[0]} />
            {/*<h1 className="text-3xl font-bold underline text-primary">*/}
            {/*    Welcome hello 222 ! to <a href="https://nextjs.org">Next.js!</a>*/}
            {/*</h1>*/}
        </>
    );
};

export default Home;
