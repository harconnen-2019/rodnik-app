import { FC } from 'react';
import Link from 'next/link';
import { IMenu } from '@/models/i-menu';
import { Sanatorium } from '@/lib/config';

type Props = {
    menu: IMenu[];
};

const Footer: FC<Props> = ({ menu }) => {
    return (
        <footer className="container mt-24 hidden lg:block pb-10 border-t border-l-logo-circle dark:border-d-logo-circle pt-10 opacity-80 tracking-wide">
            <div className="grid grid-cols-2">
                <div>
                    <ul className="mb-3">
                        {!!menu.length &&
                            menu.map((item) => (
                                <li
                                    key={item.href}
                                    className="list-none inline pr-5 font-display hover:underline"
                                >
                                    <Link href={item.href}>
                                        <a>{item.name}</a>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <p className="mb-3 font-display">
                        <Link href="/privacy-policy">
                            <a className="hover:underline mr-2">
                                Политика конфиденциальности
                            </a>
                        </Link>
                        {' | '}
                        <Link href="/terms-of-use">
                            <a className="hover:underline ml-2">
                                Пользовательское соглашение
                            </a>
                        </Link>
                    </p>
                    <p className="text-3xl font-light mb-3 font-display">
                        <a href={`tel:${Sanatorium.orgPhone}`}>
                            ТЕЛ: {Sanatorium.orgPhone.replace('77', '-77')}
                        </a>
                    </p>
                    <p className="font-display">
                        тел./факс: {Sanatorium.orgPhoneOther.join(' ')}
                    </p>
                </div>
                <div className="font-display">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()}{' '}
                        {Sanatorium.orgFullName}
                    </p>
                    <p className="mb-3">{Sanatorium.orgAddress}</p>
                    <div className="flex items-center">
                        <div className=" w-16 h-16 mr-3 bg-[url('/static/img/footer-logo-fnpr.png')] bg-cover rounded-xl opacity-70" />
                        <div>
                            <a
                                href="https://profkurort.ru/"
                                rel="nofollow noreferrer"
                                target="_blank"
                                className="hover:underline"
                            >
                                АО &quot;СКО ФНПР &quot;Профкурорт&quot;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
