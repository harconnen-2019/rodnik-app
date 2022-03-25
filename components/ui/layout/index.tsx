// import Footer from './footer'

import { FC } from 'react';
import Link from 'next/link';

const Layout: FC = ({ children }) => {
    if (!children) return null;
    return (
        <>
            <div className="bg-header-texture bg-center bg-cover w-100 h-80 md:h-550 lg:h-628">
                <div className="container h-full relative">
                    <Link href="/">
                        <div
                            className="w-36 h-36 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-logo-slice rounded-full flex justify-center items-center absolute bottom-10 left-1 md:bottom-16 lg:left-10 2xl:left-40 cursor-pointer"
                            title="Санаторий РОДНИК г. Пятигорск"
                        >
                            <div className="bg-logo-white bg-center bg-contain bg-no-repeat w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52" />
                        </div>
                    </Link>
                </div>
            </div>
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
