import React, { useEffect, useState } from 'react'
import style from './Ingredients.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Ingredients() {
  let [ingredient, setIngredient] = useState([]);
  async function getIngredient() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    console.log(data);
    setIngredient(data.meals);

  }
  useEffect(() => {
    getIngredient()
  }, [])
  return (
    <>
      {ingredient.length != 0 ? <div className="row  gx-3 gy-5 text-center">
        {ingredient.slice(0, 20).map((ingredient, index) =>
          <div className="col-md-3" key={index}>
            <Link to={`/FilterIngredient/${ingredient.strIngredient}`} style={{"textDecoration":"none","color":"#fff"}} >
              <div className='cursor-pointer'>

                <i class="fa-solid fa-drumstick-bite fa-4x mb-2"></i>
                <h4>{ingredient.strIngredient}</h4>
                <p>{ingredient.strDescription.split(" ").splice(0, 20).join(" ")}</p>


              </div>
            </Link>
          </div>
          // <div className="col-md-3" key={index}>
          //   <Link to={`/FilterIngredient/${ingredient.strIngredient}`} >

          //     <i class="fa-solid fa-drumstick-bite fa-4x"></i>
          //     <h3>{ingredient.strIngredient
          //     }</h3>
          //     <p>{ingredient.strDescription.split(" ").splice(0, 20).join(" ")
          //     }</p>
          //   </Link>
          // </div>

        )}
      </div> : <Loading />}
    </>
  )
}
