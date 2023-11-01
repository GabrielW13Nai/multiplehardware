import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import {  } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import logo from '../images/logo.jpg';

const Navigation = () => {

  const[nav, setNav] = useState(false)

  function toggleDiv(e){
    e.preventDefault()
    setNav(prev=> !prev)
  }

  return (
    <div className='navig-main'>
      <div>
        <img
        className='img-logo'
        src={logo}
        alt='not found'
        width='75'
        height='75'
        />
      </div>
        <div className='navigation'>
          <div className='dropdown-trigger' onClick={toggleDiv}>
            <BiMenu />
          </div>
          <div className={`dropdown-menu ${nav? 'menu-open': ''}`}>
            <li className='nav'>
            <Link className='nav' to='/home'><BsHouse /> &nbsp; <p className='name-format'>Home</p> <span className='arrow'>></span></Link>
            </li>
            <li className='nav'>
            <Link className='nav' to='/about'><BsClipboard /> &nbsp;<p className='name-format'>About</p><span className='arrow'>></span></Link>
            </li>
            <li className='nav'>
            <Link className='nav' to='/contacts'><RiContactsBookLine /> &nbsp;<p className='name-format'>Contact Us</p> <span className='arrow'>></span></Link>
            </li>
            <li className='nav'>
            <Link className='nav' to='/reviews'><MdReviews /> &nbsp; <p className='name-format'>Reviews</p> <span className='arrow'>></span></Link>
            </li>
          </div>
        </div>
    </div>
  )
}

export default Navigation
