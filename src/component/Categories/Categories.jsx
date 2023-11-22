import React, { useEffect, useState } from 'react'
import { style } from './Categories.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Categories() {
  let [cat, setCat] = useState([]);
  async function getCategories() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log(data);
    setCat(data.categories);

  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
    {cat.length!=0?
      <div className="row gy-3" >
        {cat.map((cat, index) =>

          <div className="col-md-3" key={index}>
            <Link to={`/MealsInCategorey/${cat.strCategory}`} >
            <div className='meal card position-relative overflow-hidden rounded-3 cursor-pointer'>
              <img className="w-100 " src={cat.strCategoryThumb} alt="" srcset="" />
              <div className='overlay  text-dark'>
                <h3>{cat.strCategory}</h3>
                <p>{cat.strCategoryDescription.split(' ').slice(0,20).join(' ')}</p>

              </div>
            </div>
            </Link>
          </div>

        )}
      </div>:<Loading/>}
    </>
  )
}