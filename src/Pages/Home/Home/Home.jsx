import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import ExtraSection from '../ExtraSection/ExtraSection';
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
            <ChooseUs></ChooseUs>
            <RealsticsToyCar></RealsticsToyCar>
            <Tabsection></Tabsection>
            <Contact></Contact>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;