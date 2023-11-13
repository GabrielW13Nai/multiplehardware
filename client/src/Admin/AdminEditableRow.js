import React from 'react'
import './Admin.css'
import { AiTwotoneSave } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const AdminEditableRow = ({handleEditFormChange, handleEditReverse, editObj, item }) => {

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

  return (
    <>
        <td className='desc-text-edit'>{item.id}</td>
        <td className='desc-text-edit'>
            <input
            type="text"
            placeholder='serial number'
            onChange={handleEditFormChange}
            defaultValue={item.serial_number}
            name='serial_number'
            />
        </td>
        <td className='desc-text-edit'>
            <input
            type="text"
            placeholder='name'
            name='name'
            onChange={handleEditFormChange}
            defaultValue={item.name}
            />
        </td>
        <td className='desc-text-edit'>
            <select onChange={handleEditFormChange} defaultValue={item.size} name='size'>
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
        </td>
        <td className='desc-text-edit'>
          <select onChange={handleEditFormChange} defaultValue={item.category} name='category'>
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
        </td>
        <td className='desc-text-edit'>
          <select onChange={handleEditFormChange} defaultValue={item.sub_category} name='sub_category'>
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
        </td>
        <td className='desc-text-edit'><input
            type="text"
            placeholder='item number'
            name='item_number'
            onChange={handleEditFormChange}
            defaultValue={item.item_number}
            />
        </td>
        <div className='btn-action-items'>
          <button className='desc-btn' type='submit' ><AiTwotoneSave /></button>
          <button className='desc-btn' onClick={handleEditReverse}><AiOutlineCloseCircle /></button>
        </div>
    </>
  )
}
export default AdminEditableRow
