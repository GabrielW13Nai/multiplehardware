import { React, useEffect, useState } from 'react'
// import { ItemContext } from '../Context/ItemContext'
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Navigation from '../Cards/Navigation'
import AdminNavigation from './AdminNavigation'
import './Admin.css'

const AdminItems = () => {

  const[items, setItems] = useState([])
  const[filter, setFilter] = useState("")
  const[filtered, setFiltered] = useState("")


  useEffect(() => {
    fetch('/items')
    .then((res) => res.json())
    .then((item) => setItems(item));
}, [])



useEffect(() => {
  const itemFilter = items.filter(item => {
    return Object.values(item).join("").toLowerCase().includes(filter.toLowerCase());
  })
  setFiltered(itemFilter)
  }, [filter, items])

  function handleDelete(id){
    const choice = window.confirm("are you sure you want to delete this item?")
    if(choice){
      fetch(`/items/${id}`, {method: 'DELETE',})
      .then(res => res.json())
      .then(() => {
        const newItem = items.filter(item => item.id !== id)
        setItems(newItem)
      })
      window.location.reload(true)
    }
  }


  return (
    <div>
      <Navigation />
      <AdminNavigation />
      <div className='search-field'>
        <input type='text' className='search-txtbx' placeholder='Search for product' onChange={e =>setFilter(e.target.value) }/>
        {/* <button className='search-btn' onClick={handleSearch}><BsSearch /></button> */}
      </div>
      <div className='table-items'>
        <thead>
          <tr className='item-table-label'>
            <th>Serial No.</th>
            <th>Item name</th>
            <th>Item category</th>
            <th>Item sub-category</th>
            <th>Item Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0? items.map(item=>{
            return (
              <>
              <tr>
               <td className='desc-text'>{item.serial_no}</td>
                <td className='desc-name'>{item.name}</td>
                <td className='desc-text'>{item.category}</td>
                <td className='desc-text'>{item.sub_category}</td>
                <td className='desc-text'>{item.item_no}</td>
                <div className='btn-action-items'>
                  <button className='desc-btn'><BiEditAlt /></button>
                  <button className='desc-btn' onClick={() => handleDelete(item.id)}><AiFillDelete/></button>
                </div>
              </tr>
              </>)})
              :
              filtered.map(item=>{
                return (
                  <>
                  <tr>
                   <td className='desc-text'>{item.serial_no}</td>
                    <td className='desc-name'>{item.name}</td>
                    <td className='desc-text'>{item.category}</td>
                    <td className='desc-text'>{item.sub_category}</td>
                    <td className='desc-text'>{item.item_no}</td>
                    <div className='btn-action-items'>
                      <button className='desc-btn'><BiEditAlt /></button>
                      <button className='desc-btn' onClick={() => handleDelete(item.id)}><AiFillDelete/></button>
                    </div>

                  </tr>
                  </>)
          })
          }

        </tbody>

      </div>

    </div>
  )
}

export default AdminItems
