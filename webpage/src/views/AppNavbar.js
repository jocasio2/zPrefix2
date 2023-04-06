import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { useContext} from 'react';
 import { LoginContext } from '../App';
 import { Button } from 'react-bootstrap';
 import { useNavigate } from 'react-router-dom';



function AppNavbar() {
    const {loggedIn, setLoggedIn, user} = useContext(LoginContext);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" expand="lg" className='appNavbar'>
          <Container className='navBarTitle'>
            <Navbar.Brand className='navBarTitle'>Frisbee World</Navbar.Brand>
              <Nav className="me-auto links">
                <Link className='appNavbar'  to="/">Home</Link>
                {
                loggedIn ?
                    [ 
                        // add as many as you'd like here
                        <Link className='appNavbar'  to="/updateFrisbees">Edit Frisbees </Link>
                    ]
                    :
                    null
                }
                <div className='loginNavBar'>
                    {
                        !loggedIn ?
                            <Link className='appNavbar'  to="/login">Login </Link>
                        
                        :
                          <span id='user-name'>Signed in as: {user[0].name}</span>
                          
                    }
                </div>
                {
                loggedIn ? 
                [
                <Button className='mx-4' onClick={() => {
                    navigate("/login");
                     setLoggedIn(false);
                }} variant="outline-light">Logout</Button>
                ]
                : null
                }
              </Nav>
            
          </Container>
        </Navbar>
      );
}

export default AppNavbar