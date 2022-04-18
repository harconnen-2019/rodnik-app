import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
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
                    content={`Предлагаем Вам качественный курортный отдых в ${Sanatorium.orgFullName} по приемлемым ценам. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Кратко о санатории</Title>
        </>
    );
};

export default About;
