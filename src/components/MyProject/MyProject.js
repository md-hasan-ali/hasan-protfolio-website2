import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <div className="section-title pb-4 text-center">
                    <h2>My Latest Works</h2>
                    <p>Hi, i'm Hasan Ali, Experience crafter from Bangladesh.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project =>
                            <Col key={project.id}>
                                <Card>
                                    <Card.Img variant="top" src={project?.image1} />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <p>{project.description}</p>
                                        <Link to={`/projects/${project?.id}`}>
                                            <button className='btn btn-danger'>Details</button>
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