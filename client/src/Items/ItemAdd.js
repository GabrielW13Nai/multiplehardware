import React from 'react'
import { useState } from 'react'

const ItemAdd = ({ onAddItem }) => {

    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[image, setImage] = useState("")

    const formAdd = {
        name: name,
        description: description,
        image: image
    }
    const[setObj] = useState(formAdd)

    // function handleChange(e){
    // setObj({...obj, [e.target.id]: e.target.value})}



    function handleSubmit(e) {
        e.preventDefault()
        fetch('/items', {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(formAdd)
        })
        .then(r => r.json())
        .then(item => {setObj(formAdd);
        onAddItem(item)});      
    }

  return (
    <>
        <div >
            <div className='additems'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        className='txbadd'
                        placeholder='Input name'
                        onChange={e=> setName(e.target.value)}/>
    
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        placeholder='Description'
                        className='txbadd'
                        onChange={e=> setDescription(e.target.value)}/>

                    <label htmlFor='image'>Image Url: </label>
                    <input
                        type='text'
                        placeholder='image'
                        className='txbadd'
                        onChange={e=> setImage(e.target.value)}/>
                    <button type='submit' className='btn-add'>ADD</button><br></br>
                </form>

            </div>
            
        </div>
    </>
  )
}
export default ItemAdd
