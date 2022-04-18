const packageJson = require('../package.json');
export const VERSION: string = `${packageJson.name} --version ${packageJson.version}`;

export const DEBUG: boolean = process.env.NODE_ENV === 'development';

export class Sanatorium {
    static org: string = 'ЛПУП';
    static orgName: string = 'Санаторий «РОДНИК»';
    static orgCity: string = 'г. Пятигорск.';
    static orgFullName: string = `${this.org} ${this.orgName} ${this.orgCity}`;
    static orgNote: string = 'Лечебно-профилактическое учреждение профсоюзов';
    static orgPhone: string = '+7(800)2008777';
    static orgPhoneOther: string[] = [
        '+7(8793)30-17-83',
        '+7(8793)30-17-81',
        '+7(8793)30-13-38',
    ];
    static orgEmail: string = 'rodnik.manager@profkurort.ru';
    static orgAddress: string =
        'Ставропольский край, 357500, г. Пятигорск бульвар Гагарина, 21';
}

export const SOC: {} = {
    VK: 'https://vk.com/kmvrodnik',
    OK: 'https://ok.ru/profile/568175482088',
    FB: 'https://www.facebook.com/sanatoriy.rodnik/',
    TW: 'https://twitter.com/SanatoryRodnik',
    YOUTUBE:
        'https://www.youtube.com/playlist?list=PLSOFuqdiH49b7GU97SAPon-YpjUYWVn7l',
};
