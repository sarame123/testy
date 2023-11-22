import React, { useEffect } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


export default function Card({mealprop}) {
	
  return (
 <>

 <div className="col-md-3">
 <Link to={`/details/${mealprop.idMeal}`}>
		<div  className='meal card position-relative overflow-hidden rounded-3 cursor-pointer'>
		<img className="w-100 " src={mealprop.strMealThumb} alt="" srcset=""/>
			<div className='overlay start-0 text-dark d-flex justify-content-center align-items-center'>
				<h3>{mealprop.strMeal}</h3>
				
			</div>
		</div>
		</Link>
</div>

 </>
  )
}
