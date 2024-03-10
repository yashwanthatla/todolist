import React, { useState } from 'react';

export default function Card({ description }) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="border-slate-200 border-2 rounded-lg shadow-xl text-start w-96 mt-5 py-3 hover:bg-slate-200 cursor-pointer" onClick={toggleDescription}>
            <h3 className="px-5">{description.heading}</h3>
            {showDescription && <p className="px-5">{description.body}</p>}
        </div>
    );
}