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

import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home/>}/>
      <Route path='/category' element={<Categories/>}/>
      <Route path='/article' element={<Articles/>}/>
    
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
