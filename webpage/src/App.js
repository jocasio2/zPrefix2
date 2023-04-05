import './App.css';
import React from 'react';
import AppNavbar from './views/AppNavbar';
import { Route, Routes } from 'react-router-dom'
import FrisbeeData from './views/FrisbeeData';
import { useState, useEffect} from 'react';


export const FrisbeeContext = React.createContext();

function App() {
  const [frisbee, setFrisbee] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/home')
    .then(res => res.json())
    .then(data => setFrisbee(data))
}, [])
console.log(frisbee)
  return (
    <FrisbeeContext.Provider value={{frisbee, setFrisbee}}>
      <div className="App">
        <AppNavbar />
        <Routes>
        <Route path="/" element={<FrisbeeData />} />
        </Routes>
      
      </div>
    </FrisbeeContext.Provider>
  );
}

export default App;
