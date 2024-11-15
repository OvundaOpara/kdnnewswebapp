import react, { useState } from 'react'
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
import Fashion_index from './Pages/FIltered_pages/Fashion/Fashion_index'
import Account from './Pages/Account'
import Lifestyle from './Pages/Lifestyle'
import Health_GHIR from './Pages/Health_GHIR'
import Politics from './Pages/Politics'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Account_Setting from './Components/Accounts/Account_Setting.jsx/Account_Setting'
import Save_Post from './Components/Save_Post/Save_Post'
import FAQ from './Pages/FAQ'

function App () {
const [user, setUser] = useState(false)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout user={user} setUser={setUser}/>}>
        <Route index element={<Home />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/article' element={<Articles />} />
        <Route path='/movies' element={<Movies_index />} />
        <Route path='/sport' element={<Sport_index />} />
        <Route path='/hollywood' element={<Hollywood_index />} />
        <Route path='/Cate_lifestyle' element={<Lifestyle_index />} />
        <Route path='/fashion' element={<Fashion_index />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path='/health' element={<Health_GHIR />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/register' element={<Register setUser={setUser} />} />
        <Route path='/account_setting' element={<Account_Setting setUser={setUser}/>} />
        <Route path='/save_post' element={<Save_Post />} />
        <Route path='/FAQ' element={<FAQ />} />
      </Route>
    )
  )

  return (
    <div className='bg-background'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
