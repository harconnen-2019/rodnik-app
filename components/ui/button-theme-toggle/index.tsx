import { Dispatch, FC } from 'react';
type Props = {
    theme: string;
    setTheme: Dispatch<string>;
};

//FIXME: При первом запуске иконка всегда светлой темы

const ButtonThemeToggle: FC<Props> = ({ theme, setTheme }) => {
    // if (!theme) return null;
    return (
        <div
            className="w-10 h-10 md:w-16 md:h-16 bg-l-toggle hover:bg-l-h-toggle dark:bg-d-toggle dark:hover:bg-d-h-toggle rounded-b-full flex justify-center items-center absolute right-2 lg:right-24 2xl:right-32 cursor-pointer"
            title="Изменить тему сайта"
            onClick={() => {
                theme === 'light' ? setTheme('dark') : setTheme('light');
            }}
        >
            <svg className="fill-white dark:fill-d-toggle-svg w-6 md:w-10">
                <use xlinkHref={theme === 'light' ? '#sun' : '#moon'} />
            </svg>
        </div>
    );
};
export default ButtonThemeToggle;
