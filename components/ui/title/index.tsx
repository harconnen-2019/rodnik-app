import { FC } from 'react';

const Title: FC = ({ children }) => {
    if (!children) return null;
    return (
        <>
            <h1 className="mb-10 sm:mb-20 mt-10 font-display text-3xl sm:text-5xl tracking-wide">
                {children}
            </h1>
        </>
    );
};

export default Title;
