import React, { createContext, useState, useEffect } from 'react'

export const ItemContext = createContext()

const ItemContextProvider = (props) => {

    const [items, setItem] = useState([])

    useEffect(() => {
        fetch('/items')
        .then(res => res.json())
        .then((item) => setItem(item))
    }, [items])

    const updatedItem = (id, updated) => {
        setItem(items.map(item => item.id === id? updated: item))
    }

  return (
    <div>
        <ItemContext.Provider value={ { items, updatedItem } }>
            {props.children}
        </ItemContext.Provider>
    </div>
  )
}

export default ItemContextProvider
