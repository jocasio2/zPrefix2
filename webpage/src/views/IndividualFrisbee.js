import React from 'react'
import { FrisbeeContext } from '../App';
import { useState, useContext } from 'react';
import './IndividualFrisbee.css'


function IndividualFrisbee({details}) {

    const {frisbee, setFrisbee, setDetailFrisbee, detailFrisbee} = React.useContext(FrisbeeContext);

    
console.log(detailFrisbee)
  return (
    <div className='frisbeeDetails'>
       
        <div className='frisbeeImg'>
            <img src={detailFrisbee.img}/>
        </div>
        <div className='frisbeeBrand'>
            <h4>{detailFrisbee.brand}</h4>
            <p>{detailFrisbee.type}</p>
            <p>{detailFrisbee.description}</p>
        </div>
    </div>
  )
}

export default IndividualFrisbee