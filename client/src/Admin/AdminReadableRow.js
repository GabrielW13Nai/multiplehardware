import React from 'react'
import './Admin.css'
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const AdminReadableRow = ( {item, onEditClick, onDelete}) => {
  return (
    <>
        <td className='desc-text'>{item.id}</td>
        <td className='desc-text'>{item.serial_number}</td>
        <td className='desc-text'>{item.name}</td>
        <td className='desc-text'>{item.size}</td>
        <td className='desc-text'>{item.category}</td>
        <td className='desc-text'>{item.sub_category}</td>
        <td className='desc-text'>{item.item_number}</td>
        <div className='btn-action-items'>
          <button className='desc-btn' onClick={onEditClick}><BiEditAlt /></button>
          <button className='desc-btn' onClick={onDelete}><AiFillDelete/></button>
        </div>
    </>
  )
}
export default AdminReadableRow
