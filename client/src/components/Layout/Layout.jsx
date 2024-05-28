import React from 'react';
import Header from "@/components/Layout/Header.jsx";
import Footer from "@/components/Layout/Footer.jsx";

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />

        </div>
    );
};

export default Layout;
