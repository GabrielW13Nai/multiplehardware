import React, {useState} from 'react'
import './Admin.css'
import { BiEditAlt } from "react-icons/bi";

const AdminEditableRow = ({id}) => {

    const[serial_no, setSerial] = useState("")
    const[name, setName] = useState("")
    const[category, setCategory] = useState("")
    const[sub_category, setSubCategory] = useState("")
    const[item_no, setItemNo] = useState("")

    const obj = {
        serial_no,
        name,
        category,
        sub_category,
        item_no
    }

    function handleEdit(id){
        const choice = window.confirm("Are you sure you want to delete this item?")
        if (choice){
        fetch(`/items/${id}`,{
            method: 'PATCH',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)}
            )
        .then(res => res.json())
        .then((item) => console.log(item));
        }
        window.location.reload(true)
        }

  return (
    <>
        <td className='desc-text'>
            <input 
            type="text"
            placeholder='input..' 
            onChange={e => setSerial(e.target.value)}
            />
        </td>
        <td className='desc-name'><input 
            type="text"
            placeholder='input..'
            name='serial-no'
            onChange={e => setName(e.target.value)}
            />
        </td>
        <td className='desc-text'><input 
            type="text"
            placeholder='input..'
            name='category'
            onChange={e => setCategory(e.target.value)}
            />
        </td>
        <td className='desc-text'><input 
            type="text"
            placeholder='input..'
            name='sub-category'
            onChange={e => setSubCategory(e.target.value)}
            />
        </td>
        <td className='desc-text'><input 
            type="text"
            placeholder='input..'
            name='item-no'
            onChange={e => setItemNo(e.target.value)}
            />
        </td>
        <button className='desc-btn' onClick={() => handleEdit(id)}><BiEditAlt /></button>
    </>
  )
}
export default AdminEditableRow