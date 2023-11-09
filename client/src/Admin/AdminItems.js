import { React, useEffect, useState, Fragment } from 'react'
import { BiEditAlt } from "react-icons/bi";
// import { ItemContext } from '../Context/ItemContext'

import { AiFillDelete } from "react-icons/ai";
import { FcAddDatabase } from "react-icons/fc";
import Navigation from '../Cards/Navigation'
import AdminNavigation from './AdminNavigation'
import './Admin.css'
import AdminModal from './AdminModal';
import AdminReadableRow from './AdminReadableRow';
import AdminEditableRow from './AdminEditableRow';

const AdminItems = () => {

  const[items, setItems] = useState([])
  const[filter, setFilter] = useState("")
  const[filtered, setFiltered] = useState("")

  const[editRow, setEditRow] = useState(null)

  const[modal, setModal] = useState(false)

  // const[serial_no, setSerial] = useState("")
  // const[name, setName] = useState("")
  // const[category, setCategory] = useState("")
  // const[sub_category, setSubCategory] = useState("")
  // const[item_no, setItemNo] = useState("")
    
  // const obj = {
  //   serial_no,
  //   name,
  //   category,
  //   sub_category,
  //   item_no
  // }


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
    const choice = window.confirm("Are you sure you want to delete this item?")
    if (choice){
      fetch(`/items/${id}`, {method: 'DELETE',})
      .then(res => res.json())
      .then(() => {
        const newItem = items.filter(item => item.id !== id)
        setItems(newItem)
      })
      window.location.reload(true)
    }
  }

  function handleModal(){
    setModal(true)
  }

  // function handleEditClick(e, item){
  //   e.preventDefault();
  //   setEditRow(item.id)
  // }

  // function selectUser(id){
  //   const item = items[id - 1]


  // }



  return (
    <div>
      <Navigation />
      <AdminNavigation />
      <div className='search-field'>
        <input type='text' className='search-txtbx' placeholder='Search for product' onChange={e =>setFilter(e.target.value) }/>
        <button className='add-btn' onClick={handleModal}><FcAddDatabase /></button>
      </div>
      <div className='table-items'>
        <thead>
          <tr className='item-table-label'>
            <th>Id</th>
            <th>Serial No.</th>
            <th>Item name</th>
            <th>Item category</th>
            <th>Sub-category</th>
            <th>No. of items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0? items.map(item=>{
            return (
              <>
              <tr>
                <Fragment>
                  {editRow === item.id ? <AdminReadableRow/> : <AdminEditableRow item={item} />}
                </Fragment>
                
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
                    <AdminReadableRow item={item}/>
                    <div className='btn-action-items'>
                    <Fragment>
                      {editRow === item.id ? <AdminReadableRow/> : <AdminEditableRow item={item} />}
                    </Fragment>
                    <button className='desc-btn'><BiEditAlt /></button>
                      <button className='desc-btn' onClick={() => handleDelete(item.id)}><AiFillDelete/></button>
                    </div>
                  </tr>
                  </>)
          })
          }

        </tbody>

      </div>
      {modal && <AdminModal
      closeModal={() => setModal(false)}  
      />}

    </div>
  )
}

export default AdminItems
