import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Details from '../Exercises/Details/Details';
import Profile from '../Profile/Profile';
import './Exercises.css'
import Breaks from '../Breaks/Breaks';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handdleAddToSidebar = (exercise) => {
        console.log(exercise);
        const newSidebar = [...sidebar, exercise]
        setSidebar(newSidebar);
    }

    return (
        <div className='main'>
            <div className='exercises'>
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    handdleAddToSidebar={handdleAddToSidebar}
                ></Exercise>)
            }
            </div>
            <div className='main-sidebar'>
                <div className='sidebar'>
                <Profile></Profile>
                <Breaks></Breaks>
                <Details sidebar={sidebar}></Details>
                </div>
            </div>
        </div>
    );
};

export default Exercises;