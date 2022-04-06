import { INomer } from '@/models/i-nomer';

export const corpus = {
    corpMain: 'Главный корпус',
    corpV: 'В корпус',
    corp2: '2 корпус',
    corp4: '4 корпус',
    corp7: '7 корпус',
    corp10: '10А корпус',
};

export const typeNomera = {
    double: 'Двухместные номера',
    single: 'Одноместные номера',
    twoRoom: 'Двухкомнатные номера',
    premium: 'Высшая категория номеров',
};

export const category = {
    primary: '1 категория',
    secondary: '2 категория',
    lux: 'Люкс',
};

export const dataNomera: INomer[] = [
    {
        id: '2к2м1к10а',
        type: typeNomera.double,
        category: category.secondary,
        href: '10korp-2kat-2m-1kom',
        name: 'Двухместный номер 2к, 1-комнатный',
        corpus: corpus.corp10,
        note: 'Расположен в 450 м от главного корпуса санатория. Питание и лечебные процедуры – в главном корпусе санатория.',
        count: 2,
        area: 17,
        services: ['Сейф'],
        photo: ['10korp-2kat-2m-1kom.jpg'],
    },
    {
        id: '1к2м1к10а',
        type: typeNomera.double,
        category: category.primary,
        href: '10korp-1kat-2m-1kom',
        name: 'Двухместный номер 1к, 1-комнатный',
        corpus: corpus.corp10,
        note: 'Расположен в 450 м от главного корпуса санатория. Питание и лечебные процедуры – в главном корпусе санатория.',
        count: 2,
        area: 17,
        services: ['Сейф'],
        photo: ['10korp-1kat-2m-1kom.jpg'],
    },
    {
        id: '1к2м1кб',
        type: typeNomera.double,
        category: category.primary,
        href: 'bkorp-1kat-2m-1kom',
        name: 'Двухместный номер 1к, 1-комнатный',
        corpus: corpus.corpMain,
        note: 'В вестибюле корпуса располагается медицинское приемное отделение, пункт приема медицинской сестры. На первом этаже лоби бар, обеденный зал, киноконцертный зал.',
        count: 2,
        area: 17,
        services: ['Сейф'],
        photo: ['bkorp-1kat-2m-1kom.jpg'],
    },
    {
        id: '1к2м1кб-конд',
        type: typeNomera.double,
        category: category.primary,
        href: 'bkorp-1kat-2m-1kom-kond',
        name: 'Двухместный номер 1к, 1-комнатный (с кондиционером)',
        corpus: corpus.corpMain,
        note: 'В вестибюле корпуса располагается медицинское приемное отделение, пункт приема медицинской сестры. На первом этаже лоби бар, обеденный зал, киноконцертный зал.',
        count: 2,
        area: 17,
        services: ['Сейф'],
        photo: ['bkorp-1kat-2m-1kom-kond.jpg'],
    },
    {
        id: '1к2м2к10а',
        type: typeNomera.double,
        category: category.primary,
        href: '10korp-lux-2m-2kom',
        name: 'Двухместный номер 1К, 2х-комнатный',
        corpus: corpus.corp10,
        note: 'Улучшенное питание «Люкс». Расположен в 450 м от главного корпуса санатория. Питание и лечебные процедуры – в главном корпусе санатория.',
        count: 2,
        area: 32,
        services: ['Сейф'],
        photo: ['10korp-lux-2m-2kom.jpg'],
    },
    {
        id: '1к1м1к10а',
        type: typeNomera.single,
        category: category.primary,
        href: '10korp-1kat-1m-1kom',
        name: 'Одноместный номер 1К, 1-комнатный',
        corpus: corpus.corp10,
        note: 'Расположен в 450 м от главного корпуса санатория. Питание и лечебные процедуры – в главном корпусе санатория.',
        count: 1,
        area: 20,
        services: ['Сейф'],
        photo: ['10korp-1kat-1m-1kom.jpg'],
    },
    {
        id: '2к1м1кб',
        type: typeNomera.single,
        category: category.secondary,
        href: 'bkorp-2kat-1m-1kom',
        name: 'Одноместный номер 2К, 1-комнатный',
        corpus: corpus.corpMain,
        note: 'В вестибюле корпуса располагается медицинское приемное отделение, пункт приема медицинской сестры. На первом этаже лоби бар, обеденный зал, киноконцертный зал.',
        count: 1,
        area: 16,
        services: ['Сейф'],
        photo: ['bkorp-2kat-1m-1kom.jpg'],
    },
    {
        id: '2к1м1к4',
        type: typeNomera.single,
        category: category.secondary,
        href: '4korp-2kat-1m-1kom',
        name: 'Одноместный номер 2К, 1-комнатный',
        corpus: corpus.corp4,
        note: 'Соединен с главным корпусом закрытым отапливаемым переходом - «зимним садом». Помещения культурно-развлекательного характера (танцевальный зал, тренажерный зал, бильярдная, бар, детская комната) Питание и лечебные процедуры – в основном корпусе санатория',
        count: 1,
        area: 18,
        services: ['Сейф'],
        photo: ['4korp-2kat-1m-1kom.jpg'],
    },
    {
        id: '1к2м2к4',
        type: typeNomera.twoRoom,
        category: category.primary,
        href: '4korp-lux-2m-2kom',
        name: 'Двухместный номер 1К, 2х-комнатный',
        corpus: corpus.corp4,
        note: 'Улучшенное питание «Люкс». Соединен с главным корпусом закрытым отапливаемым переходом - «зимним садом». Помещения культурно-развлекательного характера (танцевальный зал, тренажерный зал, бильярдная, бар, детская комната) Питание и лечебные процедуры – в основном корпусе санатория',
        count: 2,
        area: 32,
        services: ['Сейф'],
        photo: ['4korp-lux-2m-2kom.jpg'],
    },
    {
        id: '1к2м2кб',
        type: typeNomera.twoRoom,
        category: category.primary,
        href: 'bkorp-lux-2m-2kom',
        name: 'Двухместный номер 1К, 2х-комнатный',
        corpus: corpus.corpMain,
        note: 'Улучшенное питание «Люкс». Соединен с главным корпусом закрытым отапливаемым переходом - «зимним садом». Помещения культурно-развлекательного характера (танцевальный зал, тренажерный зал, бильярдная, бар, детская комната) Питание и лечебные процедуры – в основном корпусе санатория',
        count: 2,
        area: 32,
        services: ['Сейф'],
        photo: ['bkorp-lux-2m-2kom.jpg'],
    },
    {
        id: '1к1м1кб',
        type: typeNomera.single,
        category: category.primary,
        href: 'bkorp-1kat-1m-1kom',
        name: 'Одноместный номер 1К, 1-комнатный',
        corpus: corpus.corpMain,
        note: 'В вестибюле корпуса располагается медицинское приемное отделение, пункт приема медицинской сестры. На первом этаже лоби бар, обеденный зал, киноконцертный зал.',
        count: 1,
        area: 20,
        services: ['Сейф'],
        photo: ['bkorp-1kat-1m-1kom.jpg'],
    },
    {
        id: '1к1м1к4',
        type: typeNomera.single,
        category: category.primary,
        href: '4korp-1kat-1m-1kom',
        name: 'Одноместный номер 1К, 1-комнатный',
        corpus: corpus.corp4,
        note: 'Соединен с главным корпусом закрытым отапливаемым переходом - «зимним садом». Помещения культурно-развлекательного характера (танцевальный зал, тренажерный зал, бильярдная, бар, детская комната) Питание и лечебные процедуры – в основном корпусе санатория',
        count: 1,
        area: 18,
        services: ['Сейф'],
        photo: ['4korp-1kat-1m-1kom.jpg'],
    },
    {
        id: 'л2м2кв',
        type: typeNomera.premium,
        category: category.lux,
        href: 'vkorp-lux-2m-2kom',
        name: 'Люкс 2х местный 2х-комнатный',
        corpus: corpus.corpV,
        note: 'Улучшенное питание «Люкс» - в обеденном зале корпуса. Расположен в 600 м от главного корпуса санатория. Лечебные процедуры - в основном лечебном корпусе санатория.',
        count: 2,
        area: 35,
        services: ['Сейф'],
        photo: ['vkorp-lux-2m-2kom.jpg'],
    },
    {
        id: 'л2м2к7',
        type: typeNomera.premium,
        category: category.lux,
        href: '7korp-lux-2m-2kom',
        name: 'Люкс 2х местный 2х-комнатный',
        corpus: corpus.corp7,
        note: 'Улучшенное питание «Люкс» - в обеденном зале корпуса. Расположен в 100 м от главного корпуса санатория. Лечебные процедуры - в основном лечебном корпусе санатория.',
        count: 2,
        area: 35,
        services: ['Сейф'],
        photo: ['7korp-lux-2m-2kom.jpg'],
    },
    {
        id: 'л2м2к2',
        type: typeNomera.premium,
        category: category.lux,
        href: '2korp-lux-2m-2kom',
        name: 'Люкс 2х местный 2х-комнатный',
        corpus: corpus.corp2,
        note: 'Улучшенное питание «Люкс», отдельная парковка, большой уютный вестибюль с удобными креслами, биллиардный стол, все это располагает к комфортному проживанию и лечению в санатории. Расположен рядом с главным корпусом санатория.',
        count: 2,
        area: 35,
        services: ['Сейф'],
        photo: ['2korp-lux-2m-2kom.jpg'],
    },
    {
        id: 'л2м3кв',
        type: typeNomera.premium,
        category: category.lux,
        href: 'vkorp-app-2m-3kom',
        name: 'Люкс 2х местный 3х-комнатный',
        corpus: corpus.corpV,
        note: 'Улучшенное питание «Люкс» - в обеденном зале корпуса. Расположен в 600 м от главного корпуса санатория. Лечебные процедуры - в основном лечебном корпусе санатория.',
        count: 2,
        area: 53,
        services: ['Сейф'],
        photo: ['vkorp-app-2m-3kom.jpg'],
    },
    {
        id: 'л2м3к2',
        type: typeNomera.premium,
        category: category.lux,
        href: '2korp-app-2m-3kom',
        name: 'Люкс 2х местный 3х-комнатный',
        corpus: corpus.corp2,
        note: 'Улучшенное питание «Люкс», отдельная парковка, большой уютный вестибюль с удобными креслами, биллиардный стол, все это располагает к комфортному проживанию и лечению в санатории. Расположен рядом с главным корпусом санатория.',
        count: 2,
        area: 35,
        services: ['Сейф'],
        photo: ['2korp-app-2m-3kom.jpg'],
    },
];
