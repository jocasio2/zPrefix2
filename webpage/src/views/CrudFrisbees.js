import React, {useState } from 'react'
import {FrisbeeContext}  from '../App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CrudFrisbee.css'


function CrudFrisbees() {
const [brand, setBrand] = useState()
const [type, setType] = useState()
const [color, setColor] = useState()
const [desc, setDesc] = useState(' ')
const [img, setImg] = useState()
const [id, setId] = useState();

const[selected, setSelected] =  useState();

const {frisbee, setFrisbee} = React.useContext(FrisbeeContext);


    const handlePost = (e) => {
        
        fetch('http://localhost:8080/frisbees', {
        method: "POST",
        body: JSON.stringify({
            brand:brand,
            type:type, 
            color:color, 
            description:desc, 
            img:img
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(()=> 
            fetch('http://localhost:8080/frisbees')
                .then(res => res.json())
                .then(data => setFrisbee(data))
            )
    }

    const handleDelete = (e) => {
       
        fetch(`http://localhost:8080/frisbees/${id}`, {
            method: "DELETE",
            headers: {
            "Content-type": "application/json"
            }
        })
        .then(()=> 
        fetch('http://localhost:8080/frisbees')
            .then(res => res.json())
            .then(data => setFrisbee(data))
        )
        }
    const handleUpdate = (e) => {
        
    fetch(`http://localhost:8080/frisbees`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(()=> 
    fetch('http://localhost:8080/frisbees')
        .then(res => res.json())
        .then(data => setFrisbee(data))
    )
    }

    const handleFrisbeeSelected = (frisID) => {
        let fris = frisbee.filter(e => e.id == frisID)[0]
        setSelected(fris);
    // setBrand(e.brand)
    // setType(e.type) 
    // setColor(e.color) 
    // setDesc(e.desc) 
    // setImg(e.img)
    }




  return (
    
    <div className='divForm'>
        
        <Form className='formDiv' onSubmit={(e) => {e.preventDefault(); handlePost(); setFrisbee()}}>
        <Form.Label><h3>Add Frisbee</h3></Form.Label>
            <Form.Group onChange={(e) => setBrand(e.target.value)} className="mb-3" controlId="formBrand">
                <Form.Control type="text" placeholder="Brand and Name" />
            </Form.Group>
            <Form.Select onChange={(e) => setType(e.target.value)}>
                <option>Select Disc Type</option>
                <option>Ultimate</option>
                <option>Golf</option>
                <option>Freestyle</option>
            </Form.Select>
            <br></br>
            <Form.Select onChange={(e) => setColor(e.target.value)}>
                <option>Select Color</option>
                <option>White</option>
                <option>Red</option>
                <option>Black</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Yellow</option>
            </Form.Select>
            <br></br>
            <Form.Group onChange={(e) => setDesc(e.target.value)} className="mb-3" controlId="formDesc">
                <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Label>Choose image close to new frisbee.</Form.Label>
            <Form.Select onChange={(e) => setImg(e.target.value)}>
                <option>Select Image</option>
                {frisbee?.map((fris, i)=>{
                    return(
                <>
                    <option key={i}>{fris.img}</option>
                </>
            )})}
            </Form.Select>
            <br></br>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
    </Form>

   {/* // this is the DELETE FORM */}

    <Form className='formDiv' onSubmit={(e) => {e.preventDefault(); handleDelete(); setFrisbee()}}>
        <Form.Label><h3>Delete Frisbee</h3></Form.Label>
            <Form.Select onChange={(e) => setId(e.target.value)}>
                <option>Select Frisbee you wish to Delete</option>
                {frisbee?.map((fris, i)=>{
                    return(
                <>
                    <option  key={i}>{fris.id}</option>
                </>
            )})}   
            </Form.Select>
        
            <br></br>
            <Button variant="primary" type="submit" >
                Delete
            </Button>
    </Form>


    {/* THIS IS TO UPDATE FRISBEES */}


    <Form className='formDiv' onSubmit={(e) => {e.preventDefault(); handleUpdate(); setFrisbee()}}>
        <Form.Label><h3>Update Frisbee</h3></Form.Label>
        <Form.Select onChange={(e) => {handleFrisbeeSelected(e.target.value);setId(e.target.value) }}>
            {console.log(id)}
                <option>Select Frisbee you wish to Update</option>
                {frisbee?.map((fris, i)=>{
                    return(
                <>
                    <option key={i}>{fris.id}</option>
                </>
            )})}   
            </Form.Select>
            <br></br>
            <Form.Group className="mb-3" controlId="formBrand" onChange={(e) => setBrand(e.target.value)}>
                <input type="text" value={selected?.brand} placeholder="Brand" />
            </Form.Group>
            <Form.Select value={selected?.type}>
                <option>Select Disc Type</option>
                <option>Ultimate</option>
                <option>Golf</option>
                <option>Freestyle</option>
            </Form.Select>
            <br></br>
            <Form.Select value={selected?.color} >
                <option>Select Color</option>
                <option>White</option>
                <option>Red</option>
                <option>Black</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Yellow</option>
            </Form.Select>
            <br></br>
            <Form.Group onChange={(e) => setDesc(e.target.value)} className="mb-3" controlId="formDesc">
                <input type="text" value={selected?.desc} placeholder="Desc" onChange={(e) => setDesc(selected.desc) }/>
            </Form.Group>
            <Form.Label>Choose image close to new frisbee.</Form.Label>
            <Form.Select value={selected?.img} onChange={(e) => setImg(e.target.value)}>
                <option>Select Image</option>
                {frisbee?.map((fris, i)=>{
                    return(
                <>
                    <option>{fris.img}</option>
                </>
            )})}
            </Form.Select>
            <br></br>
            <Button variant="primary" type="submit" >
                Update
            </Button>
    </Form>
    
    </div>
  )

 
}

export default CrudFrisbees