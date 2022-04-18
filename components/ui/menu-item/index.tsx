import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem } from '@/models/i-menu';

interface Props extends IMenuItem {
    children: string;
}

const MenuItem: FC<Props> = ({ children, idSvgIcon, href, hiddenMobile }) => {
    const router = useRouter();

    /* Стили блока кнопки */
    let styleItem: string[] = ['w-full md:w-11/12'];
    /* Проверка показывать ли кнопку на мобильном */
    if (hiddenMobile) {
        styleItem = [...styleItem, 'hidden', 'md:block'];
    }

    //TODO: Добавить изменения при наведении на меню

    /* Стили круглой кнопки */
    let styleNav: string[] = [
        'rounded-xl md:rounded-3xl bg-l-menu-circle dark:bg-d-menu-circle',
        'w-full  md:w-full ',
        'pt-4 pb-4 shadow-lg',
    ];
    /* Стили иконки */
    let styleFill: string[] = [
        'fill-l-menu-svg dark:fill-d-menu-svg w-10 h-10 md:w-14 md:h-14 m-auto',
    ];
    /* Стили текста под иконкой */
    let styleText: string[] = [
        'text-l-menu-text dark:text-d-menu-text mt-1 text-sm md:text-lg text-center font-display',
    ];
    /* Подсветка активной кнопки */
    if (router.asPath === href) {
        styleNav = [...styleNav, 'bg-l-a-menu-circle dark:bg-d-a-menu-circle'];
        styleFill = [...styleFill, 'dark:fill-d-a-menu-svg'];
        styleText = [
            ...styleText,
            'text-l-a-menu-circle dark:text-d-a-menu-svg',
        ];
    }

    if (!children) return null;
    return (
        <div className={styleItem.join(' ')}>
            <Link href={href} passHref>
                <a>
                    <div className={styleNav.join(' ')}>
                        <svg className={styleFill.join(' ')}>
                            <use xlinkHref={`#${idSvgIcon}`} />
                        </svg>
                        <div className={styleText.join(' ')}>{children}</div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default MenuItem;
