import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem } from '../../../models/menu';

const MenuItem: FC<IMenuItem> = ({
    children,
    idSvgIcon,
    href,
    hiddenMobile,
}) => {
    const router = useRouter();

    let styleItem: string[] = ['m-3'];
    if (hiddenMobile) {
        styleItem = [...styleItem, 'hidden', 'md:block'];
    }

    let styleNav: string[] = [
        'rounded-full bg-blue-400 w-16 h-16 md:w-24 md:h-24',
        'flex justify-center item-center',
    ];
    if (router.asPath === href) {
        styleNav = [...styleNav, 'bg-logo-slice'];
    }

    if (!children) return null;
    return (
        <div className={styleItem.join(' ')}>
            <Link href={href} passHref>
                <a>
                    <div className="flex flex-col items-center">
                        <div className={styleNav.join(' ')}>
                            <svg className="fill-white w-8 md:w-11">
                                <use xlinkHref={`#${idSvgIcon}`} />
                            </svg>
                        </div>
                        <div className="text-center mt-3 text-xs md:text-sm">
                            {children}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default MenuItem;
