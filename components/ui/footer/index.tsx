import { FC } from 'react';
import { IMenu } from '../../../models/menu';
import { NAME_COMPANY } from '../../../config';

type Props = {
    menu: IMenu[];
};

const Footer: FC<Props> = ({ menu }) => {
    // if (!children) return null;
    return (
        <footer className="container mt-24 hidden md:block">
            <div className="grid grid-cols-2">
                <div>1</div>
                <div>© 2022 {NAME_COMPANY}</div>
            </div>
        </footer>
    );
};

export default Footer;
