import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import axios from 'axios';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default function Search() {
  const [meals,setMeals]=useState([]);

  async function searchByName(letter,item) {
    console.log(item);
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${letter}=${item}`)
   item && data.meals && setMeals(data.meals);
  }
  
 
  return (
    <>
      <div className="container text-white  mt-3 " id="sectionofsearch" >
      <div className="row g-4" >
            <div className="col-md-6">
              <input type="text"  onChange={(e)=>{
                if(/^[a-zA-Z]+/.test(e.target.value))
                {

                searchByName("s",e.target.value)
              }}}

        id="name" className="form-control" placeholder="Search By Name"/>
            </div>
            <div className="col-md-6">
              <input type="text"  name="name" id="firstLetter" className="form-control" placeholder="Search By First Letter" maxLength="1"
              onChange={(e)=>{
                if(/^[a-zA-Z]+/.test(e.target.value))
                {

                searchByName("f",e.target.value)
              }}}/>
            </div>
      </div>
    </div>
    <br />
    {!meals.length?<h2>No Meals Found</h2> :<div className="row gy-3">
        {meals.map((meal,index)=><Card key={index} mealprop={meal}/>)}
 </div>}
    </>

  )
}
