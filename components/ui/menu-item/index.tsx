import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem } from '../../../models/i-menu';

const MenuItem: FC<IMenuItem> = ({
    children,
    idSvgIcon,
    href,
    hiddenMobile,
}) => {
    const router = useRouter();

    /* Стили блока кнопки */
    let styleItem: string[] = ['m-3'];
    /* Проверка показывать ли кнопку на мобильном */
    if (hiddenMobile) {
        styleItem = [...styleItem, 'hidden', 'md:block'];
    }

    /* Стили круглой кнопки */
    let styleNav: string[] = [
        'rounded-full bg-menu-circle-light dark:bg-menu-circle-dark w-16 h-16 md:w-24 md:h-24',
        'flex justify-center item-center',
    ];
    /* Подсветка активной кнопки */
    if (router.asPath === href) {
        styleNav = [
            ...styleNav,
            'bg-menu-svg-light-active dark:bg-menu-svg-dark-active',
        ];
    }

    if (!children) return null;
    return (
        <div className={styleItem.join(' ')}>
            <Link href={href} passHref>
                <a>
                    <div className="flex flex-col items-center">
                        <div className={styleNav.join(' ')}>
                            <svg className="fill-menu-svg-light dark:fill-menu-svg-dark w-10 md:w-14">
                                <use xlinkHref={`#${idSvgIcon}`} />
                            </svg>
                        </div>
                        <div className="text-menu-text-light dark:text-menu-text-dark text-center mt-3 text-xs md:text-sm">
                            {children}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default MenuItem;
