import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footers/Footer';
import NavigationBar from '../Pages/SharedPages/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;