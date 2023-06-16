import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import RealsticsToyCar from '../RealsticsToyCar/RealsticsToyCar';
import Tabsection from '../Tabsection/Tabsection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <RealsticsToyCar></RealsticsToyCar>
            <Tabsection></Tabsection>
            <Contact></Contact>
        </div>
    );
};

export default Home;