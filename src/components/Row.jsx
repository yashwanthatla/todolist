// Row.jsx
import React, { useState } from 'react';
import Card from './Card.jsx';

export default function Row({ text, initialNum }) {
    const [tasks, setTasks] = useState([]);
    const [num, setNum] = useState(initialNum);

    const handleNewCard = () => {
        const heading = prompt("Enter task heading:");
        const body = prompt("Enter task description:");
        const newTask = { heading, body };
        setTasks([...tasks, newTask]);
        setNum(num + 1);
    };

    return (
        <div id='row'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='bg-red-400 w-fit px-1 text-sm rounded-sm'>{text}</p>
                    <p className='text-slate-300 px-1'>{num}</p>
                </div>
                <div>
                    <p>Options</p>
                </div>
            </div>
            {tasks.map((task, index) => (
                <Card key={index} description={task} />
            ))}
            <div className='flex flex-start py-3 hover:bg-slate-100 cursor-pointer rounded-md' id="button" onClick={handleNewCard}>
                <p className='px-2 text-slate-300'>+</p>
                <p className='px-2 text-slate-300'>New</p>
            </div>
        </div>
    );
}
