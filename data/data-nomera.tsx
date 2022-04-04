import { INomer } from '../models/i-nomer';

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
];
