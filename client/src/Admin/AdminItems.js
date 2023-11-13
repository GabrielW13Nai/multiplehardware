import { React, useEffect, useState, Fragment} from 'react'

// import { ItemContext } from '../Context/ItemContext'

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

  const [editObj, setEditObj] = useState({
    serial_number: "",
    name: "",
    size: "",
    category: "",
    sub_category: "",
    item_number: "",
  })

  const [item, setItem] = useState({
    serial_number: "",
    name: "",
    size: "",
    category: "",
    sub_category: "",
    item_number: "",
  })



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

  function handleEditFormChange(e){
    // e.preventDefault();


    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newData = {...editObj}

    newData[fieldName] = fieldValue
    setEditObj(newData)

    // const name = e.target.name
    // const value = e.target.value
    // setEditObj({...editObj, [name]: value})
  }

  function handleEditClick(item, e){
    // e.preventDefault();
    setEditRow(item.id)
    setItem(item)

    const formValues = {
      serial_number: item.serial_number,
      name: item.name,
      size: item.size,
      category: item.category,
      sub_category: item.sub_category,
      item_number: item.item_number,
    }
    setEditObj(formValues)

  }

  function handleEditItem(updated){
    items.map((item) => {
      if (item.id === updated.id){
        return updated
      }
      else{
        return item
      }
    })
  }

  function handleSubmit(e, id){
    // const choice = window.confirm("Are you sure you want to edit this item?")
    //   if (choice){
      id = editRow
      e.preventDefault()
      fetch(`/items/${id}`,{
          method: 'PATCH',
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          },
          body: JSON.stringify(editObj)}
          )
      .then(res => res.json())
      .then((item) => {console.log(item)
      handleEditItem(item)});
      // }
      window.location.reload(true)
  }


  // function selectUser(id){
  //   const item = items[id - 1]


  // }



  return (
    <>
      <Navigation />
      <AdminNavigation />
      <div className='search-field'>
        <input type='text' className='search-txtbx' placeholder='Search for products' onChange={e =>setFilter(e.target.value) }/>
        <button className='add-btn' onClick={handleModal}><FcAddDatabase /></button>
      </div>

      <form className='form-item' onSubmit={handleSubmit}>
        <div className='table-items'>
          <thead>
            <tr className='item-table-label'>
              <th>Id</th>
              <th>Serial No.</th>
              <th>Item name</th>
              <th>Size</th>
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
                     {editRow === item.id?
                        <AdminEditableRow handleEditFormChange={handleEditFormChange} handleEditReverse={() => setEditRow(null)} editObj={editObj} item={item} />
                        :<AdminReadableRow item={item} onDelete={() => handleDelete(item.id)} onEditClick={() => handleEditClick(item)} />
                        }
                </Fragment>
                </tr>
                </>)})
                :
                  filtered.map(item=>{
                    return (
                      <>
                      <tr>
                      <Fragment>
                      {editRow === item.id?
                          <AdminEditableRow handleEditFormChange={handleEditFormChange} handleEditReverse={() => setEditRow(null)} editObj={editObj} item={item} />
                          :<AdminReadableRow item={item} onDelete={() => handleDelete(item.id)} onEditClick={() => handleEditClick(item)} />
                          }
                      </Fragment>
                      </tr>
                      </>)
            })
            }

          </tbody>

          </div>
        </form>
        {modal && <AdminModal item={item}
        closeModal={() => setModal(false)}
        />}

      </>

  )
}

export default AdminItems


