import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './projects.css'

const MyProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects)
    return (
        <div className='my-projects py-5' id='projects'>
            <div className="container">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="section-title pb-4 text-center">
                    <h2>My <span style={{ color: '#FF5733' }}>Lattest</span> Works</h2>
                    <p>Hi, i'm Hasan Ali, Experience crafter from Bangladesh.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project =>
                            <Col key={project.id}>
                                <Card data-aos="fade-up"
                                    data-aos-duration="1000" className='single-project'>
                                    <Card.Img variant="top" src={project?.image1} />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <p>{project.description}</p>
                                        <Link to={`/projects/${project?.id}`}>
                                            <Button className='share-button1'>Details</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default MyProject;