import type { NextPage } from 'next';
import Head from 'next/head';
import { NAME_COMPANY, PRIMARY_PHONE } from '../config';
import Title from '@/components/ui/title';

const Terms: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {NAME_COMPANY} Официальный сайт. Политика конфиденциальности
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${NAME_COMPANY} по приемлемым ценам. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>Пользовательское соглашение</Title>
        </>
    );
};

export default Terms;
