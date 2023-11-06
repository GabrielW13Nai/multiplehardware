import React from 'react'
import { Link } from 'react-router-dom'
import { IoSettings } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";
import { MdDashboardCustomize } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdInventory } from "react-icons/md";

const AdminNavigation = () => {
  return (
    <div>
        <div className='admin-navigation'>
            <Link to='/admin'><button className='btn-admin'><MdDashboardCustomize /> &nbsp; &nbsp; Dashboard</button></Link>
            <Link to='/adminanalytics'><button className='btn-admin'><SiGoogleanalytics /> &nbsp; &nbsp; Analytics</button></Link>
            <Link to='/adminperfomance'><button className='btn-admin'><FcSalesPerformance /> &nbsp;&nbsp; Perfomance</button></Link>
            <Link to='/adminsettings'><button className='btn-admin'><IoSettings /> &nbsp; &nbsp; Settings</button></Link>
            <Link to='/adminperfomance'><button className='btn-admin'><MdInventory /> &nbsp;&nbsp; Inventory</button></Link>
        </div>
    </div>
  )
}

export default AdminNavigation;
