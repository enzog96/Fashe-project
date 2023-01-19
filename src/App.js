import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Productpage from './routes/Productpage'
import About from './routes/About'
import Contact from './routes/Contact'
import Basket from './routes/Basket'
import Heart from './routes/Heart'
import React from 'react';


function App() {
  return (
    <>
    <Routes>
    <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>}/>
      <Route path={process.env.PUBLIC_URL + '/product'} element={<Productpage/>}/>
      <Route path={process.env.PUBLIC_URL + '/about'}  element={<About/>} />
      <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact/>}/>
      <Route path={process.env.PUBLIC_URL + '/heart'} element={<Heart/>}/>
      <Route path={process.env.PUBLIC_URL + '/basket'} element={<Basket/>}/>
    </Routes>
    </>
  );
}

export default App;
