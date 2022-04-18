import { Dispatch, FC } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MenuItem from '../menu-item';
import SvgSlice from './svg-slice';
import { dataMenu } from '@/data/data-menu';
import { Sanatorium } from '@/lib/config';
// import Footer from '../footer';

const ButtonThemeToggle = dynamic(() => import('../button-theme-toggle'), {
    ssr: false,
});

type Props = {
    theme: string;
    setTheme: Dispatch<string>;
    children: JSX.Element;
};

const Layout: FC<Props> = ({ children, theme, setTheme }) => {
    if (!children) return null;

    return (
        <>
            <header className="bg-l-m-img sm:bg-l-img dark:bg-d-m-img dark:sm:bg-d-img bg-center bg-cover w-100 h-80 md:h-550 lg:h-628">
                <div className="container h-56 md:h-80 lg:h-96 relative">
                    <ButtonThemeToggle theme={theme} setTheme={setTheme} />
                    <div className="absolute top-24 md:top-40 lg:left-10 xl:left-20 2xl:left-40 flex">
                        <Link href="/">
                            <a>
                                <div
                                    className="w-10 h-10 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-l-logo-circle dark:bg-d-logo-circle rounded-full flex justify-center items-center mr-1 lg:mr-2"
                                    title="Санаторий РОДНИК г. Пятигорск"
                                >
                                    <div className="bg-[url('../public/static/img/logo.png')] dark:opacity-80 bg-center bg-contain bg-no-repeat w-8 h-8 md:w-24 md:h-24 lg:w-32 lg:h-32" />
                                </div>
                            </a>
                        </Link>
                        <div>
                            <div className="font-display font-bold text-base md:text-3xl lg:text-5xl">
                                {Sanatorium.orgName}
                            </div>
                            <div className="text-xs md:text-lg lg:text-xl">
                                {Sanatorium.orgNote}
                            </div>
                            <div className=" md:block text-xs md:text-xl mt-3">
                                Жемчужина кавминвод - пятигорский курорт <br />
                                подойдёт вам наилучшим образом!
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<div className="mt-[-250px]">*/}
            {/*    {!!dataMenu.length && (*/}
            {/*        <nav className="container grid grid-cols-4 lg:grid-cols-8 gap-2 justify-items-center">*/}
            {/*            {dataMenu.map((item) => (*/}
            {/*                <MenuItem*/}
            {/*                    key={item.href}*/}
            {/*                    idSvgIcon={item.idSvgIcon}*/}
            {/*                    href={item.href}*/}
            {/*                    hiddenMobile={!!item.hiddenMobile}*/}
            {/*                >*/}
            {/*                    {item.name}*/}
            {/*                </MenuItem>*/}
            {/*            ))}*/}
            {/*        </nav>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<main className="container">{children}</main>*/}
            {/*<Footer menu={dataMenu} />*/}
            <SvgSlice />
        </>
    );
};

export default Layout;
