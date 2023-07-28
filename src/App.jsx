import { lazy, Suspense } from 'react';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from './Pages/Error';
import ListSidebar from './Pages/ListSidebar';
import Detail from './Pages/Detail';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPW from "./Pages/ForgetPW";
import Pricing from './Pages/Pricing';
import Features from './Pages/Features';
import Faqs from './Pages/Faqs';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './index.css'
import Sell from './Pages/Sell';
import About from './Pages/About';
import Contact from './Pages/Contact';
const Buy = lazy(() => import('./Pages/Buy'));

const App = () => {
  const properties = [
    {
        id: '1',
        title: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        image: 'https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg',
    },
    {
        id: '2',
        title: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        image: 'https://hously-react.vercel.app/static/media/2.e5bc3d17749573c2fd3e.jpg',
    },
    {
        id: '3',
        title: '3723 SANDBAR DR, Addis, LA 70710, USA',
        image: 'https://hously-react.vercel.app/static/media/3.c799274c67ecb7c94a70.jpg',
    },
    {
        id: '4',
        title: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        image: 'https://hously-react.vercel.app/static/media/4.1cefc41c08f3161f9c19.jpg',
    },
    {
        id: '5',
        title: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        image: 'https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg',
    },
    {
        id: '6',
        title: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        image: 'https://hously-react.vercel.app/static/media/6.e926f8483d02a9e86342.jpg',
    },
]
  return (
    <div className=" container-fluid dark:bg-slate-900">
          <Suspense fallback={<div>Loading...</div>}>

    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/forgetPW"} element={<ForgetPW />} />
      <Route path={"/signup"} element={<Signup />} />

      <Route path={"/home"} element={<><Navbar/><Home properties={properties}/><Footer/></>} />
      
        <Route path="/pricing" element={<><Navbar/><Pricing /><Footer/></>} />
        <Route path="/features" element={<><Navbar/><Features /><Footer/></>} />
        <Route path="/faqs" element={<><Navbar/><Faqs /><Footer/></>} />
        <Route path="/aboutus" element={<><Navbar/><About /><Footer/></>} />
        <Route path="/contact" element={<><Navbar/><Contact /><Footer/></>} />

        <Route path={'/buy'} element={<><Navbar/><Buy properties={properties}/><Footer/></>}/>
        <Route path={'/sell'} element={<><Navbar/><Sell properties={properties}/><Footer/></>}/>
      <Route path={'/list-sidebar'} element={<><Navbar/><ListSidebar properties={properties}/><Footer/></>}/>

      <Route path={'/detail/:id'} element={<><Navbar/><Detail properties={properties}/><Footer/></>}/>

      <Route path={'/*'} element={<><Error/></>}/>

    </Routes>
    </Suspense>
    </div>
    
  )
}

export default App