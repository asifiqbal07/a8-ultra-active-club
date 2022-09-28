import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, img, age, Details, Time } = props.exercise;
    const { handdleAddToSidebar } = props;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p> {Details} </p>
            <p>Age: {age}</p>
            <p>Time: {Time}m</p>
            <button onClick={() => handdleAddToSidebar(props.exercise)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;