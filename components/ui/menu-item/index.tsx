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
    let styleItem: string[] = ['m-3'];
    /* Проверка показывать ли кнопку на мобильном */
    if (hiddenMobile) {
        styleItem = [...styleItem, 'hidden', 'md:block'];
    }

    //TODO: Добавить изменения при наведении на меню

    /* Стили круглой кнопки */
    let styleNav: string[] = [
        'rounded-full bg-l-menu-circle dark:bg-d-menu-circle',
        'w-16 h-16 md:w-24 md:h-24',
        'flex justify-center item-center',
    ];
    /* Стили иконки */
    let styleFill: string[] = [
        'fill-l-menu-svg dark:fill-d-menu-svg w-10 md:w-14',
    ];
    /* Стили текста под иконкой */
    let styleText: string[] = [
        'text-l-menu-text dark:text-d-menu-text text-center mt-3 text-sm md:text-lg font-display',
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
                    <div className="flex flex-col items-center">
                        <div className={styleNav.join(' ')}>
                            <svg className={styleFill.join(' ')}>
                                <use xlinkHref={`#${idSvgIcon}`} />
                            </svg>
                        </div>
                        <div className={styleText.join(' ')}>{children}</div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default MenuItem;
