import type { NextPage } from 'next';
import Head from 'next/head';
import { NAME_COMPANY, PRIMARY_PHONE } from '../config';
import Title from '../components/ui/title';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Пятигорский курорт : О санатории Родник - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${NAME_COMPANY} по приемлемым ценам. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>Кратко о санатории</Title>
        </>
    );
};

export default About;
