import React, { FC } from 'react';
import { useRouter } from 'next/router';

const Slug: FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div>Проверка - {slug}</div>;
};

export default Slug;
