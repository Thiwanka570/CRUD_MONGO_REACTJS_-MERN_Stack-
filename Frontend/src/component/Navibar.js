import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navibar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Student Details Store</Navbar.Brand>
                    <Nav className="me-auto">
                    
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navibar