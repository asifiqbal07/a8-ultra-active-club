import React from 'react';
import './Details.css'

const Details = (props) => {

    const { sidebar } = props;


    let time = 0;
    for (const exercise of sidebar) {
        console.log(exercise);
        time = time + exercise.Time
    }
    
    return (
        <div>
            <h2>Exercise Details</h2>
            <div className='details'>
                <div className='exercise-time'>
                    <h4>Exercise time:</h4>
                    <h5>{time}m</h5>
                </div>
                
            </div>
        </div>
    );
};

export default Details;