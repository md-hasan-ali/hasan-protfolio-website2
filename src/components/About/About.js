import React from 'react';
import './About.css'
import aboutImg from '../../images/about.bg.jpg'
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about-area py-5' id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div data-aos="fade-right" data-aos-duration="1500" className="about-content">
                            <h2><span style={{ color: '#FF5733' }}>About</span> Me!</h2>
                            <p>Hi! I am Hasan Ali, a Professional and passionate FrontEnd web developer from Bangladesh.
                                Being a friendly person and eager to learn new technologies, I'm the right person here to develop modern and killer-looking Front End Website Development as recommended.</p>
                            <Button className='share-button1'>Contact Me!</Button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div data-aos="fade-left" data-aos-duration="1500" className="about-image">
                            <img className='hasan' src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;