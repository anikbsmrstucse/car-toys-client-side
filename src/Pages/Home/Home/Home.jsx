import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import RealsticsToyCar from '../RealsticsToyCar/RealsticsToyCar';
import Tabsection from '../Tabsection/Tabsection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <RealsticsToyCar></RealsticsToyCar>
            <Tabsection></Tabsection>
        </div>
    );
};

export default Home;