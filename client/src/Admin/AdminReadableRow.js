import React from 'react'
import './Admin.css'
import { BiEditAlt } from "react-icons/bi";
const AdminReadableRow = ( {item, handleEditClick}) => {
  return (
    <>
        <td className='desc-text'>{item.id}</td>
        <td className='desc-text'>{item.serial_no}</td>
        <td className='desc-name'>{item.name}</td>
        <td className='desc-text'>{item.category}</td>
        <td className='desc-text'>{item.sub_category}</td>
        <td className='desc-text'>{item.item_no}</td>
        <button className='desc-btn'><BiEditAlt /></button>
    </>
  )
}
export default AdminReadableRow