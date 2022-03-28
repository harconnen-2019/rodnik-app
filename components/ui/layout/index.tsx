import { FC } from 'react';
import Link from 'next/link';
import MenuItem from '../menu-item';
import SvgSlice from './svg-slice';
import { menu } from './data-menu';
import Footer from '../footer';

const Layout: FC = ({ children }) => {
    if (!children) return null;
    return (
        <>
            <header className="bg-header-texture bg-center bg-cover w-100 h-80 md:h-550 lg:h-628">
                <div className="container h-full relative">
                    <Link href="/" passHref>
                        <a>
                            <div
                                className="w-36 h-36 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-logo-slice rounded-full flex justify-center items-center absolute bottom-10 left-1 md:bottom-16 lg:left-10 2xl:left-40"
                                title="Санаторий РОДНИК г. Пятигорск"
                            >
                                <div className="bg-logo-white bg-center bg-contain bg-no-repeat w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52" />
                            </div>
                        </a>
                    </Link>
                </div>
            </header>
            <nav className="container grid grid-cols-4 lg:grid-cols-8 gap-1 justify-items-center">
                {menu.map((item) => (
                    <MenuItem
                        key={item.href}
                        idSvgIcon={item.idSvgIcon}
                        href={item.href}
                        hiddenMobile={!!item.hiddenMobile}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </nav>
            <main className="container">{children}</main>
            <Footer menu={menu} />
            <SvgSlice />
        </>
    );
};

export default Layout;
