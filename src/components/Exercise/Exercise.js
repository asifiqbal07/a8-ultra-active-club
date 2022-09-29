import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {exercise, handdleAddToSidebar} = props;
    const { name, img, age, Details, Time } = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p> {Details} </p>
            <p>Age: {age}</p>
            <p>Time: {Time}m</p>
            <button onClick={() => handdleAddToSidebar(exercise)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;