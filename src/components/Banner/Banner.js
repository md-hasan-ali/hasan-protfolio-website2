import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import hasan from '../../images/hasanali.jpg'
import ParticleBg from '../Particles/ParticleBg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area'>
            <ParticleBg></ParticleBg>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={12} md={5}>
                        <div className="banner-image">
                            <img src={hasan} alt="hasan_ali_image" />
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className="banner-content" data-aos="fade-down" data-aos-duration="2000">
                            <h1>Hi, I am <br /> <span style={{ color: '#FF5733' }}>HASAN</span> ALI</h1>
                            <h2 className='pb-2'>I am a Web Developer</h2>
                            <div data-aos="fade-up"
                                data-aos-duration="2000">
                                <Button onClick={() => window.open('https://drive.google.com/file/d/1vcc4aRylWOMEh96ZbTx08nCKiGUMMxuc/view?usp=sharing', '_blank')} className='share-button1'>Download Resume <i class="fas fa-download"></i></Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;