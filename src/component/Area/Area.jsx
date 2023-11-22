import React, { useEffect, useState } from 'react'
import style from './Area.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Area() {
  let [area, setArea] = useState([]);
  async function getArea() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    console.log(data);
    setArea(data.meals
    );

  }
  useEffect(() => {
    getArea()
  }, [])
  return (
    <>
      {area.length != 0 ? <div className="row  gx-5 gy-5">
        {area.map((area, index) =>

          <div className="col-md-3" key={index}>
            <Link to={`/FilterArea/${area.strArea}`} style={{ "textDecoration": "none", "color": "#fff" }}>
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>{area.strArea
              }</h3>
            </Link>
          </div>

        )}

      </div> : <Loading />}
    </>
  )
}
