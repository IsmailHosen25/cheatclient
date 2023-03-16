import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"


import Product from './productCom/Product';
import adminpanel from "./productAdmin/Productadmin"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Product}/>
      <Route path='/admin' Component={adminpanel}/>
    </Routes>
    </>
  );
}

export default App;
