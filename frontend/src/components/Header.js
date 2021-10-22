import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Col md={5}>
                        <Nav>
                        <LinkContainer to="/">
                            <Navbar.Brand>Home</Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to='/stock'>
                            <Nav.Link>My Stock</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/dashboard'>
                            <Nav.Link>My Dashboard</Nav.Link>
                        </LinkContainer>
                        </Nav>
                        </Col>
                        <Col md={6} className="d-none d-lg-block">
                            <h1 className='center'> Vending machine</h1>
                        </Col>
                        <Col md={3} className="d-none d-lg-block">
                            <LinkContainer to='/gtl'>
                            <Nav.Link>GTL</Nav.Link>
                        </LinkContainer>
                        </Col>
                        
                    </Container>
                </Navbar>
            </header>
    )
}

export default Header
