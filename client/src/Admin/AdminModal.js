import React, { useState } from 'react'
import './Admin.css'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
const AdminModal = ( {closeModal} ) => {
    
    const[serial_no, setSerial] = useState("")
    const[name, setName] = useState("")
    const[category, setCategory] = useState("")
    const[sub_category, setSubCategory] = useState("")
    const[item_no, setItemNo] = useState("")
    // const[err, setErr] = useState("")
    
    const obj = {
        serial_no,
        name,
        category,
        sub_category,
        item_no
    }

    // const validate = () => {
    //     if(obj.serial_no && obj )
    // }



    function handleAdd(){
       const reply = window.confirm("Are you sure you want to add this item?")
       if (reply){
        fetch('/items', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(item => console.log(item))
        alert("Item has been added successfully")
        window.location.reload(true)
    }
        }

  return (
    <div className='modal-items' onClick={(e) =>{if(e.target.className === 'modal-items') closeModal()}}>
        <div className='modal'>
        <button className='item-btn-modal-exit' onClick={closeModal}><AiOutlineCloseCircle /></button>
        <form>
            <h3>Add Items</h3>
            <div className='form-items'>
                <label htmlFor='serial-no'>Serial Number</label>
                <input 
                    type='text'
                    onChange={e => setSerial(e.target.value)}
                    />
            </div>
            <div className='form-items'>
                <label htmlFor='name'>Item Name</label>
                <input 
                    type='text'
                    onChange={e => setName(e.target.value)}
                    />
            </div>
            <div className='form-items'>
                <label htmlFor='category'>Category</label>
                <input 
                    type='text'
                    onChange={e => setCategory(e.target.value)}
                    />
            </div>
            <div className='form-items'>
                <label htmlFor='sub-category'>Sub-Category</label>
                <input 
                    type='text'
                    onChange={e => setSubCategory(e.target.value)}
                    />
            </div>
            <div className='form-items'>
                <label htmlFor='item-no'>Item Number</label>
                <input 
                    type='text'
                    onChange={e => setItemNo(e.target.value)}
                    />
            </div>
            <div className='btn-item-modal'>
                <button className='item-btn-modal-add' onClick={handleAdd}><MdOutlineAddCircleOutline /></button>
            </div>
        </form>
        </div>
            
    </div>
  )
}

export default AdminModal;