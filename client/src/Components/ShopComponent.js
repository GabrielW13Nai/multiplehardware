import React from 'react'
import { useState, useEffect } from 'react'

const ShopComponent = () => {

    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[image, setImage] = useState("")
    const[items, setItem] = useState(null)

    const formAdd = {
        name: name,
        description: description,
        image: image
    }

    useEffect(() =>{
        fetch('/items')
        .then(r => r.json())
        .then((item)=> setItem(item))
    },[] )

    fetch('/items', {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(formAdd)
        })
        .then(r => r.json())
        .then(item=> console.log(item));

  return (
    <>
    <form className='.additems'>
        <input
        type='text'
        value={formAdd.name}
        onChange={e=> setName(e.target.value)}>
        Name</input>
        <input
        type='text'
        value={formAdd.description}
        onChange={e=> setDescription(e.target.value)}>
        Name</input>
        <input
        type='text'
        value={formAdd.image}
        onChange={e=> setImage(e.target.value)}>
        Name</input>
    </form>
    </>
  )
}
export default ShopComponent
