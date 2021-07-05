import React from 'react';
import Search from '../Search';
import logo from "../../assets/img/logo.png";
import "./index.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-blocks">
                    <div className="logo">
                        <img
                            src={logo}
                            alt="logo"
                        />
                        STATISTIC
                    </div>
                    <Search/>
                </div>
            </div>
        </header>
    );
};

export default Header;
