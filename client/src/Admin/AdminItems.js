import { React, useContext } from 'react'
import ItemContext from '../Context/ItemContext'

const AdminItems = () => {
  let items = useContext(ItemContext)

  return (
    <div>
      <thead>
        <tr>Item Name</tr>
      </thead>
      <tbody></tbody>
    </div>
  )
}

export default AdminItems
