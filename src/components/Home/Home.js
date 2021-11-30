import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProject from '../MyProject/MyProject';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;