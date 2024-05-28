import React from 'react';
import UpperNav from "@/components/Layout/UpperNav.jsx";
import LowerNav from "@/components/Layout/LowerNav.jsx";

const Header = (props) => {
    return (
        <div>
            <UpperNav />
            {props.children}
            <LowerNav />
        </div>
    );
};

export default Header;
