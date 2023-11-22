import React, { useEffect, useRef } from 'react'
import {style} from './Sidebar.module.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  let sideBar=useRef(null);
  let innerSideBar=useRef(null);
  let outerSideBar=useRef(null);
  let sidebarIcon=useRef(null);
  let closeIcon=useRef(null)

  
  
    function change(){
      let left=window.getComputedStyle(sideBar.current)
    .getPropertyValue("left") 
    console.log(left);
    if(left=="0px"){
      closeSidebar();
    }
    else{
      openSidebar();
    }
    }
  function  closeSidebar(){
    let width=innerSideBar.current.offsetWidth;
     sideBar.current.style.left=`${-width}px`
     sidebarIcon.current.classList.replace('fa-close',"fa-bars")
  }
  function   openSidebar(){
    sideBar.current.style.left="0px"
    sidebarIcon.current.classList.replace("fa-bars",'fa-close')
  }
    
    useEffect(()=>{
      change()
    },[])
  return (
    <nav ref={sideBar} className="aside d-flex  col-4 ">
    <div ref={innerSideBar} className="links d-flex flex-column text-white justify-content-between p-4">
      <ul>
     
        <li className="p-0 mb-1" id="Search">
          <Link className='w-100 d-inline-block p-2' onClick={ change} to='/search'>search</Link></li>
        <li className="p-0 mb-1"  id="Categories">
          <Link onClick={ change} className='w-100 d-inline-block p-2' to="/categories">Categories</Link></li>
        <li className="p-0 mb-1" id="Area">
          <Link onClick={ change} to="/area" className='w-100 d-inline-block p-2'>Area</Link></li>
        <li className="p-0 mb-1" id="Ingredients">
          <Link onClick={ change} className='w-100 d-inline-block p-2' to="/Ingredients">Ingredients</Link></li>
        <li className="p-0 mb-1" id="contact">
          <Link onClick={ change} className='w-100 d-inline-block p-2' to="/contact">Contact</Link></li>
      </ul>
      <div>
        <div className="social-icons">
            <i className="fa-brands fa-facebook p-2"></i>
            <i className="fa-brands fa-twitter p-2"></i>
            <i className="fa-solid fa-globe p-2"></i>
        </div>
       
            <p>Copyright Â© 2019 All Rights Reserved.</p>
    
    </div>
    </div>
    <div ref={outerSideBar}  className="aside-icon py-4 d-flex flex-column align-items-center justify-content-between ">
      <img className="logo" src={logo} alt="" />
      <i ref={sidebarIcon} onClick={change} className="fa-solid fa-bars fa-2x  pe-2 text-dark"></i>
      <div className='text-dark' >
        <i className="fa-solid fa-globe d-block"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>

  </nav>
  )
}
