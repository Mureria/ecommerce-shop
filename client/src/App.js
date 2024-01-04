import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Page404 from './pages/404';
import Cart from './pages/Cart';
import Collection from './Collection';
import FAQ from './components/FAQ';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';

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
              <Route path='cart' element={<Cart/>}/>
              <Route path='men' element={<Men/>}/>
              <Route path='women' element={<Women/>}/>
              <Route path='kids' element={<Kids/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              <Route path='product' element={<Product/>}/>
              <Route path='collection' element={<Collection/>}/>
              <Route path='faq' element={<FAQ/>}/>
            </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
