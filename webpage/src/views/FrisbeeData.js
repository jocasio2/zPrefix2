import React from 'react'
import './FrisbeeData.css'
import {FrisbeeContext}  from '../App';
import { Link } from "react-router-dom";



function FrisbeeData() {


const {frisbee, setDetailFrisbee} = React.useContext(FrisbeeContext);


  return (
   <div className='container cardContainer'>
    <div className='row row-cols-3 g-3 frisCards'>
        {frisbee?.map((fris, i)=>{
            return (
            <div key={fris.id} className='card  h-80 dark frisbeeData'>
                <Link to={`/frisbees/${fris.id}`}>
                        <img onClick={()=> setDetailFrisbee(fris)} className='card-img-top pop-image-list frisbeePic' src={fris.img} alt='pic'/>
                       
                </Link>
                <div className="card-body pop-card-info">
                    <h3>{' ' + fris.brand}</h3>
                    <p>Type:{' ' + fris.type}</p>
                    <p>Color:{' ' + fris.color}</p>
                    <p>{' ' + fris.description}</p>
                </div>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default FrisbeeData