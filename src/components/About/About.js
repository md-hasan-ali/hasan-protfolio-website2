import React from 'react';
import './About.css'
import aboutImg from '../../images/hasan-img2.png'

const About = () => {
    return (
        <div className='about-area py-5' id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="about-content">
                            <h2>About Me!</h2>
                            <p>Hi! I am Hasan Ali, a Professional and passionate FrontEnd web developer from Bangladesh.
                                Being a friendly person and eager to learn new technologies, I'm the right person here to develop modern and killer-looking Front End Website Development as recommended.</p>
                            <button className='btn btn-danger'>Contact Me!</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="about-image">
                            <img className='hasan' src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;