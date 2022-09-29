import React from 'react';
import './Activities.css'
import Exercises from '../Exercises/Exercises';
import Sidebar from '../Sidebar/Sidebar';

const Activities = () => {
    return (
        <div className='main-activities'>
            <div className='activities'>
                <Exercises></Exercises>
            </div>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Activities;