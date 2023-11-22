import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import Details from '../Details/Details'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {
  return (
    <>
     <Sidebar/>
   <div className="container py-5 px-5">
   <Outlet></Outlet>
   </div>
    
    </>
  )
}
