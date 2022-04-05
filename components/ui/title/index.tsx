import { FC } from 'react';

type Props = {
    children: string;
};

const Title: FC = ({ children }) => {
    if (!children) return null;
    return (
        <>
            <h1 className="mb-10 mt-10 text-center font-semibold">
                {children}
            </h1>
        </>
    );
};

export default Title;
