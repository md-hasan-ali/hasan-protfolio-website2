import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" style={{ background: '#060604' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">HASAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="/home#about">About Me</Nav.Link>
                            <Nav.Link href="/home#projects">Projects</Nav.Link>
                            <Nav.Link href="/home#contact">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;