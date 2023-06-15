import Lottie from "lottie-react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import errorPage from '../../assets/98642-error-404.json';

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className="text-center">
           <Lottie className="w-2/5 mx-auto" animationData={errorPage} loop={true}></Lottie>
           <button onClick={goBack} className="btn btn-error">Go Back</button>
        </div>
    );
};

export default ErrorPage;