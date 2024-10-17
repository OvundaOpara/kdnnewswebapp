import react from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Articles from './Pages/Articles'

import 'bootstrap/dist/css/bootstrap.min.css'
import Movies_index from './Pages/FIltered_pages/Movies/Movies_index'
import Sport_index from './Pages/FIltered_pages/Sport/Sport_index'
import Hollywood_index from './Pages/FIltered_pages/Hollywood/Hollywood_index'
import Lifestyle_index from './Pages/FIltered_pages/Lifestyle/Lifestyle_index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/category' element={<Categories />} />
      <Route path='/article' element={<Articles />} />
      <Route path='/movies' element={<Movies_index />} />
      <Route path='/sport' element={<Sport_index />} />
      <Route path='/hollywood' element={<Hollywood_index />} />
      <Route path='/lifestyle' element={<Lifestyle_index />} />
    </Route>
  )
)

function App () {
  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
