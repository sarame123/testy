
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Card from './component/Card/Card'
import Categories from './component/Categories/Categories'
import MealsInCategorey from './component/MealsInCategorey/MealsInCategorey'
import Area from './component/Area/Area'
import FilterArea from './component/FilterArea/FilterArea'
import Ingredients from './component/Ingredients/Ingredients'
import FilterIngredient from './component/FilterIngredient/FilterIngredient'
import Details from './component/Details/Details';
import Contact from './component/Contact/Contact';
import Search from './component/Search/Search';
function App() {
  let routers=createHashRouter([{
    path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"/search",element:<Search/>},
      {path:"/card",element:<Card/>},
      {path:"/categories",element:<Categories/>},
      {path:"/area",element:<Area/>},
      {path:"/FilterArea/:area",element:<FilterArea/>},
      {path:"/MealsInCategorey/:category",element:<MealsInCategorey/>},
      {path:"/Ingredients",element:<Ingredients/>},
      {path:"/FilterIngredient/:ingrediant",element:<FilterIngredient/>},
      {path:"/details/:id",element:<Details/>},
      {path:"/contact",element:<Contact/>}
      

    ]
  }])
  return (
    <>
   <RouterProvider router={routers}>

   </RouterProvider>
    </>
  );
}

export default App;
