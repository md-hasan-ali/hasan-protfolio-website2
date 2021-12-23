import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import hasan from '../../images/hasanali.jpg'
// import ParticleBg from '../Particles/ParticleBg';
import Particles from "react-tsparticles";
import { Typewriter } from 'react-simple-typewriter';
import './Banner.css'

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='banner-area'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                // mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 4,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Container>
                <Row className='align-items-center'>
                    <Col sm={12} md={5}>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000"
                            className="banner-image">
                            <img src={hasan} alt="hasan_ali_image" />
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className="banner-content" data-aos="fade-down" data-aos-duration="2000">
                            <h1>Hi, I am <br /> <span style={{ color: '#FF5733' }}>HASAN</span> ALI</h1>
                            <h2 className='pb-2'>I Am A  <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['React Developer', 'Frontend Developer', 'Web-Designer', 'MERN-STACK Developer']}
                                    loop={20}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span></h2>
                            <div data-aos="fade-up"
                                data-aos-duration="2000">
                                <Button onClick={() => window.open('https://drive.google.com/file/d/1uhSZUUX9bUfyPhd_6bJwsnXeAU-bvfoW/view?usp=sharing', '_blank')} className='share-button1'>Download Resume <i class="fas fa-download"></i></Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;