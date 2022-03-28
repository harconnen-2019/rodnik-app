export interface IMenuItem {
    readonly idSvgIcon: string;
    readonly href: string;
    hiddenMobile?: undefined | boolean;
}

export interface IMenu extends IMenuItem {
    readonly name: string;
}
