import React from 'react'
import { useState } from 'react'
import Navigation from '../Cards/Navigation';


      

const Contact = () => {

    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[image, setImage] = useState("")

    const formAdd = {
        name: name,
        description: description,
        image: image
    }
    const[setObj] = useState(formAdd)
    const[setItem] = useState([])

    // function handleChange(e){
    // setObj({...obj, [e.target.id]: e.target.value})}

    useState(() => {
        fetch('/contacts')
        .then(r => r.json())
        .then(setItem)
    }, [])

    function handleAddItem(items){
        setItem(indiv => [...indiv, items])
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch('/items', {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(formAdd)
        })
        .then(r => r.json())
        .then(item => 
        handleAddItem(item));      
    }

  return (
    <>
        <Navigation />
            <div >
                <div className='additems'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='message'>Message</label>
                        <input
                            type='text'
                            className='txbadd'
                            placeholder='Full names'
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
export default Contact
