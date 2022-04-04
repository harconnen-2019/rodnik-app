import { FC } from 'react';
import Link from 'next/link';
import { IMenu } from '../../../models/i-menu';
import {
    NAME_COMPANY,
    PRIMARY_PHONE,
    ADDRESS,
    SECONDARY_PHONE,
} from '../../../config';

type Props = {
    menu: IMenu[];
};

const Footer: FC<Props> = ({ menu }) => {
    return (
        <footer className="container mt-24 hidden md:block pb-10 border-t border-blue-400 pt-10">
            <div className="grid grid-cols-2">
                <div>
                    <div className="mb-5">
                        {menu.map((item) => (
                            <li
                                key={item.href}
                                className="list-none inline pr-5 text-sm"
                            >
                                <Link href={item.href}>
                                    <a>{item.name}</a>
                                </Link>
                            </li>
                        ))}
                    </div>
                    <p className="mb-5 text-sm">
                        <Link href="/privacy-policy">
                            <a>Политика конфиденциальности</a>
                        </Link>
                        {' | '}
                        <Link href="/terms-of-use">
                            <a>Пользовательское соглашение</a>
                        </Link>
                    </p>
                    <p className="text-3xl font-light mb-3 font-display">
                        <a href={`tel:${PRIMARY_PHONE}`}>
                            {PRIMARY_PHONE.replace('77', '-77')}
                        </a>
                    </p>
                    <p className="mb-3">
                        тел./факс: {SECONDARY_PHONE.join(' ')}
                    </p>
                </div>
                <div>
                    <p className="mb-3">
                        &copy; {new Date().getFullYear()} {NAME_COMPANY}
                    </p>
                    <p className="mb-3">{ADDRESS}</p>
                    <div className="flex items-center">
                        <div className=" w-16 h-16 mr-3 bg-[url('/static/img/footer-logo-fnpr.png')] bg-cover rounded-xl opacity-70" />
                        <div>АО &quote;СКО ФНПР &quote;Профкурорт&quote;</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
