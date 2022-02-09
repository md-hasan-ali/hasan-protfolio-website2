import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-area' id='home'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="logo" id='home'>
                            <h2>Hasan</h2>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><a href='#about'>About Us</a></li>
                                <li><a href='#projects'>Projects</a></li>
                                <li><a href='#contact'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
