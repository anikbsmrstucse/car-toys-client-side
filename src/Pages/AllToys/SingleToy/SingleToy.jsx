import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Toy </h1>
        </div>
    );
};

export default SingleToy;