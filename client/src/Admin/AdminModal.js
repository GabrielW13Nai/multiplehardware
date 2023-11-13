import React, { useState } from 'react'
import './Admin.css'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
const AdminModal = ( {closeModal, item} ) => {
    const optSize = [
        {value: '1/4"', text: '1/4"' },
        {value: '3/16"', text: '3/16"' },
        {value: '1/2"', text: '1/2"'},
        {value: '5/8"', text: '5/8"' },
        {value: '1"', text: '1"' },
        {value: '1 1/2"', text: '1 1/2"' },
        {value: '2"', text: '2"' },
        {value: '3"', text: '3"' },
        {value: '20 litre', text: '20 litre' },
        {value: '5 litre', text: '5 litre' },
        {value: '1 litre', text: '1 litre' },
        {value: '1meter', text: '1meter' },
        {value: '1kg', text: '1kg' },
        {value: '3kg', text: '3kg' },
      ]

      const optCategory = [
        {value: 'PPR', text: 'PPR' },
        {value: 'GI', text: 'GI' },
        {value: 'Paint Accessories', text: 'Paint Accessories'},
        {value: 'Decorative', text: 'Decorative' },
        {value: 'Adhesives', text: 'Adhesives' },
        {value: 'Thinners', text: 'Thinners' },
        {value: 'Cement', text: 'Cement' },
        {value: 'Sand', text: 'Cement' },
        {value: 'Ballast', text: 'Cement' },
        {value: 'Gypsum', text: 'Gypsum' },
        {value: 'Tiles', text: 'Tiles' },
        {value: 'Timber', text: 'Timber' },
        {value: 'Equipment', text: 'Equipment' },
        {value: 'Waterproofing', text: 'Waterproofing'},
        {value: 'Light fittings', text: 'Light fittings' },
        {value: 'Bathroom fittings', text: 'Bathroom fittings'},
        {value: 'General', text: 'General' },
        {value: 'Polythene Sheets', text: 'Polythene Sheets' },
      ]

      const optSubCategory = [
        {value: 'pipes', text: 'pipes' },
        {value: 'bends', text: 'bends' },
        {value: 'Brushes', text: 'Brushes' },
        {value: 'Exterior finish', text: 'Exterior Finish'},
        {value: 'Interior Finish', text: 'Interior Finish' },
        {value: 'Adhesives', text: 'Adhesives' },
        {value: 'Thinners', text: 'Thinners' },
        {value: 'Cement', text: 'Cement' },
        {value: 'N/A', text: 'N/A' },
        {value: 'Floor Tiles', text: 'Floor Tiles'},
        {value: 'Boards', text: 'Boards' },
        {value: 'Plywood', text: 'Plywood' },
      ]

    const[serial_number, setSerial] = useState("")
    const[name, setName] = useState("")
    const[size, setSize] = useState(optSize[0].value)
    const[category, setCategory] = useState(optCategory[0].value)
    const[sub_category, setSubCategory] = useState(optSubCategory[0].value)
    const[item_number, setItemNo] = useState("")
    const[err, setErr] = useState("")

    const obj = {
        serial_number,
        name,
        size,
        category,
        sub_category,
        item_number
    }

    const validate = () => {
        if(obj.serial_number && obj.name && obj.size && obj.category && obj.sub_category && obj.item_number) {
            setErr("")
            return true;
    } else {
        let err = []
        for(let[k , v] of Object.entries(obj)){
            if(!v){
                err.push(k)
            }
        }
        setErr(err.join(", "))
        return false;
    }
}



    function handleAdd(e){
        e.preventDefault();

        if(!validate()) return;

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
                <label htmlFor='size'>Size</label>
                <select onChange={e => setSize(e.target.value)} name='size'>
              {optSize.map(opt => {
                return(
                  <option
                    key={opt.value}
                    value={opt.value}>
                      {opt.text}
                  </option>
                )
              })}
            </select>
            </div>
            <div className='form-items'>
                <label htmlFor='category'>Category</label>
                <select onChange={e => setCategory(e.target.value)} name='category'>
                {optCategory.map(opt => {
                  return(
                    <option
                      key={opt.value}
                      value={opt.value}>
                        {opt.text}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='form-items'>
                <label htmlFor='sub-category'>Sub-Category</label>
                <select onChange={e => setSubCategory(e.target.value)} name='sub_category'>
                {optSubCategory.map(opt => {
                  return(
                    <option
                      key={opt.value}
                      value={opt.value}>
                        {opt.text}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='form-items'>
                <label htmlFor='item-no'>Item Number</label>
                <input
                    type='text'
                    onChange={e => setItemNo(e.target.value)}
                    />
            </div>
            {err && <div className='err-div'>Please ensure the following fields are input: {err} </div>}
            <div className='btn-item-modal'>
                <button className='item-btn-modal-add' onClick={handleAdd}><MdOutlineAddCircleOutline /></button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default AdminModal;
