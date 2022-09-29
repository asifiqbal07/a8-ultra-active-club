import React from 'react';
import './Activities.css'
import Exercises from '../Exercises/Exercises';
import Faqs from '../FAQS/Faqs';

const Activities = () => {
    return (
        <div className='main-activities'>
            <div className='activities'>
                <Exercises></Exercises>
            </div>
            <div className='faqs-section'>
                <Faqs></Faqs>
            </div>
        </div>
    );
};

export default Activities;