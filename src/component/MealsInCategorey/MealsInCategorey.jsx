import React, { useEffect, useState } from 'react'
import style from './MealsInCategorey.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

export default function MealsInCategorey() {
  let [meal, setMeal] = useState([]);
  let {category}=useParams();
  async function getMealCategories() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    console.log(data.meals);
    setMeal(data.meals);

  }
  useEffect(() => {
    getMealCategories()
  }, [])
  return (
    <>
     {meal.length==0?<Loading></Loading>:
      <div className="row gy-3">
       {meal.map((mealIncategoru,index)=><Card  mealprop={mealIncategoru} key={index}/>)}
      </div>}
     
      
    </>
  )
}
