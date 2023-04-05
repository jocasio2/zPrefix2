import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';



function AppNavbar() {
    return (
        <Navbar bg="dark" expand="lg" className='appNavbar'>
          <Container className='navBarTitle'>
            <Navbar.Brand className='navBarTitle'>Frisbee World</Navbar.Brand>
              <Nav className="me-auto links">
                <Link className='appNavbar'  to="/">Home </Link>
              </Nav>
            
          </Container>
        </Navbar>
      );
}

export default AppNavbar