import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <div className='navigation'>
                    <li className='nav'>
                        <Link className='nav' to='/home'>Home</Link>
                    </li>
                    <li className='nav'>
                    <Link className='nav' to='/about'>About</Link>
                    </li>
                    <li className='nav'>
                    <Link className='nav' to='/contacts'>Contact Us</Link>
                    </li>
                    <li className='nav'>
                    <Link className='nav' to='/reviews'>Reviews</Link>
                    </li>
                 
        </div>
    </div>
  )
}

export default Navigation