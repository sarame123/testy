import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
// import style from '../Home.module.css'

export default function Home() {
  const[meals,setMeals]=useState([])
  async function getAllMeals(){
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    console.log(data.meals);
    setMeals(data.meals);
  }
  useEffect(()=>{
    getAllMeals()
  },[])
  return (
    <>
    {meals.length==0?<Loading></Loading>:
      <div className="row gy-3">
       {meals.map((meal,index)=><Card mealprop={meal} key={index}/>)}
      </div>}
    </>
  )
}
