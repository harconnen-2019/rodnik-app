import { IMenu } from '../../../models/menu';

export const menu: IMenu[] = [
    {
        name: 'О нас',
        idSvgIcon: 'favorites',
        href: '/about',
    },
    {
        name: 'Номера',
        idSvgIcon: 'favorites',
        href: '/nomera',
    },
    {
        name: 'Лечение',
        idSvgIcon: 'favorites',
        href: '/lechenie',
    },
    {
        name: 'Питание',
        idSvgIcon: 'favorites',
        href: '/kuhnya',
    },
    {
        name: 'Досуг',
        idSvgIcon: 'genres',
        href: '/dosug',
    },
    {
        name: 'Цены',
        idSvgIcon: 'genres',
        href: '/price',
        // hiddenMobile: true,
    },
    {
        name: 'Документы',
        idSvgIcon: 'genres',
        href: '/documents',
    },
    {
        name: 'Контакты',
        idSvgIcon: 'genres',
        href: '/contacts',
    },
];
