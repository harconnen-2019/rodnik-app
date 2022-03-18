import { FC } from 'react';

const Title: FC = ({ children }) => {
    if (!children) return null;
    return <h1>{children}</h1>;
};

export default Title;
