import React from 'react';
import './Activities.css'
import Exercises from '../Exercises/Exercises';

const Activities = () => {
    return (
        <div className='main-activities'>
            <div className='activities'>
                <Exercises></Exercises>
            </div>
        </div>
    );
};

export default Activities;