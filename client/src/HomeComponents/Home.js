import { React, useEffect, useState } from 'react'
// import ShopComponent from './ShopComponent';
import ShopDisplay from './ShopDisplay';
import Header from '../Cards/Header';
import Navigation from '../Cards/Navigation';

const Home = () => {

    const[items, setItem] = useState([])


    useEffect(()=>{
        fetch('/items')
        .then(r => r.json())
        .then(setItem)
    }, [])

  return (
    <main>
        <div className='navg'>
            <Navigation />
            <Header />
        </div>
        
        <section className='shopdisp'>
            {items.map(item =>{
                return(<ShopDisplay attribs ={item}/>
            )})}
        </section>

    </main>
  )
}

export default Home;
