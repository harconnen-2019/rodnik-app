import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { dataNomera } from '../../data/data-nomera';

const Href: FC = () => {
    const router = useRouter();
    const { href } = router.query;

    const nomer = dataNomera.find((item) => item.href === href);

    return <div>Проверка - {nomer && nomer.name}</div>;
};

export default Href;
