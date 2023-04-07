import React from 'react'
import {FrisbeeContext}  from '../App';
import './FrisbeesAdded.css'

function FrisbeesAdded() {
   
    const {frisbee} = React.useContext(FrisbeeContext);
  
    let sortedArray = frisbee.sort(function(a,b){
        return a.id-b.id
    })
    console.log('sorted', sortedArray)
   let newFrisbeeArray = sortedArray.slice(9);
   console.log(newFrisbeeArray)
return (
    <div className='addedCont'>
        {newFrisbeeArray.map((frisbee, i)=> {
            return (
                <>
                <div key={i} className='frisbeeImage'>
                    <img src={frisbee.img} alt='Pic of frisbee'/>
              
                
                    <h4>{frisbee.brand}</h4>
                    <p>{frisbee.type}</p>
                    <p>{frisbee.color}</p>
                    <p>{frisbee.description}</p>
                </div>
            </>
            )
        })}
    </div>
  )
}

export default FrisbeesAdded