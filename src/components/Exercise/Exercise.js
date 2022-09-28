import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    console.log(props)
    const { name, img, age, Details, Time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p> {Details} </p>
            <p>Age: {age}</p>
            <p>Time: {Time}</p>
            <button className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;