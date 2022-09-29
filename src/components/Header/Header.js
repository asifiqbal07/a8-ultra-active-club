import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='main-header'>
           <div className="header">
                <img src={logo} alt="" />
                <h2>Spartan Active Club</h2>
            </div>
            <h3>Select today’s exercise</h3> 
        </div>
    );
};

export default Header;