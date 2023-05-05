import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Page404 from './pages/404';
import Checkout from './pages/Checkout';
import Collection from './Collection';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='404' element={<Page404/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='collection' element={<Collection/>}/>
        </Route>      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
