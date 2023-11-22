import React, { useEffect, useState } from 'react'
import style from './FilterArea.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

export default function FilterArea() {
  let[filterarea,setFilterArea]=useState([]);
  let {area}=useParams();
  async function getFilterArea(){
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    console.log(data.meals);
    setFilterArea(data.meals)
  }
  useEffect(()=>{
    getFilterArea()
  },[])
  return (
    <>
   {filterarea.length==0?<Loading/>:  <div className="row gy-3">
        {filterarea.map((Farea)=><Card mealprop={Farea}/>)}
 </div>}
 </>
  )
}
