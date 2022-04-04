const packageJson = require('./package.json');
export const VERSION: string = `${packageJson.name} --version ${packageJson.version}`;

export const DEBUG: boolean = process.env.NODE_ENV === 'development';

export const NAME_COMPANY: string = 'ЛПУП Санаторий «РОДНИК» г. Пятигорск.';

export const PRIMARY_PHONE: string = '+7(800)2008777';

export const SECONDARY_PHONE: string[] = [
    '+7(8793)301783',
    '+7(8793)301781',
    '+7(8793)301338',
];

export const EMAIL: string = 'rodnik.manager@profkurort.ru';

export const ADDRESS: string =
    'Ставропольский край, 357500, г. Пятигорск бульвар Гагарина, 21';

export const SOC: {} = {
    VK: 'https://vk.com/kmvrodnik',
    OK: 'https://ok.ru/profile/568175482088',
    FB: 'https://www.facebook.com/sanatoriy.rodnik/',
    TW: 'https://twitter.com/SanatoryRodnik',
    YOUTUBE:
        'https://www.youtube.com/playlist?list=PLSOFuqdiH49b7GU97SAPon-YpjUYWVn7l',
};
