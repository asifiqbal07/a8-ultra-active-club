import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handdleAddToSidebar = (exercise) => {
        console.log(exercise)
    }

    return (
        <div className='exercises'>
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    handdleAddToSidebar={handdleAddToSidebar}
                ></Exercise>)
            }
        </div>
    );
};

export default Exercises;