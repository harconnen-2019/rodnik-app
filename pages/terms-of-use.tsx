import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import Title from '@/components/ui/title';

const Terms: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {Sanatorium.orgName} Официальный сайт. Политика
                    конфиденциальности
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${Sanatorium.orgFullName} по приемлемым ценам. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Пользовательское соглашение</Title>
        </>
    );
};

export default Terms;
