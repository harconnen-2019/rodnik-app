// import Navbar from './navbar'
// import Footer from './footer'

import { FC } from 'react';
 
const Layout: FC = ({ children }) => {
    if (!children) return null;
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
