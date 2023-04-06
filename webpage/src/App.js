import './App.css';
import React from 'react';
import AppNavbar from './views/AppNavbar';
import { Route, Routes } from 'react-router-dom'
import FrisbeeData from './views/FrisbeeData';
import { useState, useEffect} from 'react';
import CrudFrisbees from './views/CrudFrisbees';
import Login from './views/Login';


export const FrisbeeContext = React.createContext();
export const LoginContext = React.createContext();

function App() {
  const [frisbee, setFrisbee] = useState()
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)


  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => {setUser(data); console.log('data',data)})
}, [])


  useEffect(() => {
    fetch('http://localhost:8080/frisbees')
    .then(res => res.json())
    .then(data => setFrisbee(data))
}, [])

  return (
    <LoginContext.Provider value = {{user, setUser, loggedIn, setLoggedIn}}>
      <FrisbeeContext.Provider value={{frisbee, setFrisbee}}>
        <div className="App">
          <AppNavbar />

          <Routes>
            <Route path="/" element={<FrisbeeData />} />

            {
        loggedIn ?
            [ 
                // add as many as you'd like here
                <Route path="/updateFrisbees" element={<CrudFrisbees />} />
            ]
            :
            null
    }

            
            <Route path="/login" element={<Login />} />
          </Routes>
        
        </div>
      </FrisbeeContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
