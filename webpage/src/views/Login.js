import React from 'react'
import { Container } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Login() {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //let found = false;
        console.log('username:\n',username)
        console.log('password:\n',password)
        fetch('http://localhost:8080/login', {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {

          if(data.message == 'Success'){
            setLoggedIn(true)
            navigate('/')
            console.log(loggedIn)
          }
        })
        .catch(err => {
          window.console("Wrong username or password")
        })
    
      }

  return (
    <Container className='contLog' >
      <form className='formLogin' onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input placeholder="Username" type="text"  className="form-control"  onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-outline mb-4">
          <input placeholder="Password" type="password"  className="form-control" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4 loginButton">Sign in</button>
      </form>
    </Container>
  )
}

export default Login