import React, { useEffect, useState } from 'react'
import style from './FilterIngredient.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default function FilterIngredient() {
   let [ingredient, setingredient] = useState([]);
  let {ingrediant}=useParams()
  async function  getfilterIngredient() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediant}`)
    console.log(data.meals);
    setingredient(data.meals);

  }
  useEffect(() => {
    getfilterIngredient()
  }, [])
  return (
   
    <>
     {ingredient.length==0?<Loading></Loading>:
      <div className="row gy-3">
       {ingredient.map((item,index)=><Card mealprop={item} key={index}/>)}
      </div>}
     </>
  )
}
