import React from 'react'
import { FrisbeeContext } from '../App';

import './IndividualFrisbee.css'


function IndividualFrisbee({details}) {

    const {detailFrisbee} = React.useContext(FrisbeeContext);

    
console.log(detailFrisbee)
  return (
    <div className='frisbeeDetails'>
       
        <div className='frisbeeImg'>
            <img src={detailFrisbee.img} alt='Pic of frisbee'/>
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