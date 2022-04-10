import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';
import Title from '@/components/ui/title';

const Price: NextPage = () => {
    const title = `Цены на путевки ${new Date().getFullYear()} -
                ${new Date().getFullYear() + 1} г. официальный прайс-лист`;
    return (
        <>
            <Head>
                <title>
                    Официальные цены на путевки с лечением на{' '}
                    {new Date().getFullYear()}-{new Date().getFullYear() + 1}.
                    Санатории &quot;Родник&quot; - Официальный сайт.
                </title>
                <meta
                    name="description"
                    content={`Официальные цены на путевки, курортный отдых в лечебно-профилактическом санаторий «РОДНИК» по низким ценам в Пятигорске. Наш телефон: ${PRIMARY_PHONE}`}
                />
            </Head>
            <Title>{title}</Title>
        </>
    );
};

export default Price;
