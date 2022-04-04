import type { NextPage } from 'next';
import Head from 'next/head';
import { PRIMARY_PHONE } from '../config';

const Price: NextPage = () => {
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
            <h1>
                Цены на путевки {new Date().getFullYear()} -
                {new Date().getFullYear() + 1} г. официальный прайс-лист
            </h1>
        </>
    );
};

export default Price;
