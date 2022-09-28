import React from 'react';
import './Activities.css'
import logo from '../../images/logo.png'
import Exercises from '../Exercises/Exercises';

const Activities = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="" />
                <h2>Spartan Active Club</h2>
            </div>
            <h3>Select today’s exercise</h3>
            <Exercises></Exercises>
        </div>
    );
};

export default Activities;