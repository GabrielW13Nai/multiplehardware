import { React, createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {

  const[users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(user => setUsers(user))
  }, [users])


  return (
    <div>

    </div>
  )
}

export default UserContextProvider;
