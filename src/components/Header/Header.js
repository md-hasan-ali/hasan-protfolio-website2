import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-area'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="logo">
                            <h2>Hasan</h2>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu">
                            <ul className='me-auto'>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
