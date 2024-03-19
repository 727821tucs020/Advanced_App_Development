
import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Aboutus from './pages/About'
const Contact= lazy(()=>import('./pages/Contact'))
const Home= lazy(()=>import('./pages/Home'))
import WebLayout from '../src/layouts/Weblayout'
import Navbar from '../src/components/Public/Navbar'
import "../src/App.css"
import WebLayout1 from './layouts/Weblayout1'
import AdminDashboard from './pages/Auth/Admindashboard'
import PP from './pages/privacypolicy'
import Dashboardcontent from './pages/Admin/dashboardcontent'
import Loader from './components/loader'
import UserLogin from './pages/Auth/userlogin'
import Terms from './pages/terms';
import Faq from './pages/faq'
import Chat from './pages/chart'
const App = () => {
  return (
<>
  <BrowserRouter>
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route element={<WebLayout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/nav' element={<Navbar/>}/>
       <Route path='/privacy' element={<PP/>}/>
       <Route path='/aboutus' element={<Aboutus/>}/>
       <Route path='/terms'element={<Terms/>}/>
       <Route path='/faq'element={<Faq/>}/>
       </Route>
       <Route element={<WebLayout1/>}>
        
       </Route>
       <Route path='/dashboard1' element={<Dashboardcontent/>}/>
       <Route path='/sidebar'element={<AdminDashboard/>}/>
       <Route path='/userlogin'element={<UserLogin/>}/>
       <Route path='/ap'element={<Chat/>}/>
  
    </Routes>
    </Suspense>
  </BrowserRouter>
</>
  )
}

export default App