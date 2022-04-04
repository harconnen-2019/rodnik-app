import { IMenu } from '../models/i-menu';

export const dataMenu: IMenu[] = [
    {
        name: 'О нас',
        idSvgIcon: 'about',
        href: '/about',
    },
    {
        name: 'Номера',
        idSvgIcon: 'nomera',
        href: '/nomera',
    },
    {
        name: 'Лечение',
        idSvgIcon: 'med',
        href: '/lechenie',
    },
    {
        name: 'Питание',
        idSvgIcon: 'kuhnya',
        href: '/kuhnya',
    },
    {
        name: 'Досуг',
        idSvgIcon: 'dosug',
        href: '/dosug',
    },
    {
        name: 'Цены',
        idSvgIcon: 'price',
        href: '/price',
        // hiddenMobile: true,
    },
    {
        name: 'Документы',
        idSvgIcon: 'docs',
        href: '/documents',
    },
    {
        name: 'Контакты',
        idSvgIcon: 'contacts',
        href: '/contacts',
    },
];
