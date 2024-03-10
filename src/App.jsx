import React from 'react';
import Row from './components/Row.jsx';

export default function App() {
    return (
        <div className='flex flex-row p-5 gap-3 flex-wrap'>
            <Row text="Not Started" initialNum={0} className='w-32' />
            <Row text="In Progress" initialNum={0} className='w-32' />
            <Row text="Completed" initialNum={0} className='w-32' />
        </div>
    );
}