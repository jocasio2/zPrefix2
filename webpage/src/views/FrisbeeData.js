import React from 'react'
import './FrisbeeData.css'
import {FrisbeeContext}  from '../App';



function FrisbeeData() {
   
    const {frisbee} = React.useContext(FrisbeeContext);

console.log(frisbee);
  return (
   <div className='container cardContainer'>
    <div className='row row-cols-3 g-3 frisCards'>
        {frisbee?.map((fris, i)=>{
            return (
            <div key={i} className='card  h-80 dark frisbeeData'>
                <img className='frisbeePic' src={fris.img} alt='pic'/>
                <h3>{' ' + fris.brand}</h3>
                <p>Type:{' ' + fris.type}</p>
                <p>Color:{' ' + fris.color}</p>
                <p>{' ' + fris.description}</p>
                
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default FrisbeeData