import React, { useEffect, useState } from 'react'
import style from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { object } from 'yup';

export default function Details() {
  let [details, setDetails] = useState([])
  let { id } = useParams();
  async function getDetails() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   return data.meals[0]
   
  }

 async function getReceipe(){
    let detailsObject=await getDetails()
    detailsObject.ingredient=[]
    let newRecipe=new Map(Object.entries(detailsObject))
    for(let i=0;i<newRecipe.size;i++){
      if(  newRecipe.get(`strIngredient${i}`)){
        detailsObject.ingredient.push(`${newRecipe.get(`strMeasure${i}`)} ${newRecipe.get(`strIngredient${i}`)}`);
      }

    }
    setDetails(detailsObject)
  }
  useEffect(() => {
    console.log(details);
    getReceipe()
  }, [])
  
  return (
    <>
      {details.length != 0 ? <div className="">
        <div className="container">
          <div className="wrapper row py-5">
            <div className="preview col-md-4">
              <div >
                <img className="rounded-2 w-100" src={details.strMealThumb
                } />
                <h3>{details.strMeal}</h3>
                <Link className='btn btn-warning' to="/">
                  Back To Home
                </Link>
              </div>
            </div>
            <div className="details col-md-8">
              <h3 className="meal-title">Instructions</h3>

              <p className="meal-description">{details.strInstructions
              }</p>
              <h2 className="Area">Area: <span>{details.strArea
              }</span></h2>
              <h2 className="Category">Category: <span>{details.strCategory
              }</span></h2>
              <div className="recieps mb-3">
                <h2>Recieps:</h2>
                {details.ingredient.map((detal,index)=><span key={index} className='btn btn-warning me-2 mt-2'>{detal}</span>)}
               
               
              </div>
              {details.strTags &&
              <div className="Tags">
                <h2 className='m-0'>Tags:</h2>
              
                {details.strTags.split(",").map((tag,index)=><span key={index} className='btn btn-primary me-2 mt-2'>{tag}</span>)}
              </div>
}
              <div className='pt-4'>
                <a target='_blank' className='btn btn-lg btn-success me-2' href={details.strSource
                }>Source</a>
                <a target='_blank' className='btn btn-lg btn-danger me-2' href={details.strYoutube
                }>Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div> : <Loading />}
    </>
  )
}
