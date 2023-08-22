
import React ,{ useEffect, useReducer, useState } from 'react';
import './App.css';
import axios from './axios';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Product_details from './Pages/Products/Product_details';



const initial_link = {}


const Reducer_link = (state , action) =>{

  switch(action.type){
    case 'LINK' : 
      return action.payload
      break
  }


}




function App() {

  const [productLink, dispatch_productLink] = useReducer(Reducer_link , initial_link)


  console.log(productLink.id)


  const GettingProductLink =(post)=>{
    dispatch_productLink({type: 'LINK' , payload : post})

   
  } 


  return (
    <React.Fragment>
    
      <>
        <Routes>
          <Route path='/' element={<HomePage 
            productLink = {GettingProductLink}
          />}/>
          <Route path={`/products/:${productLink.id}`} element={<Product_details/>}/>
        </Routes>
      </>
      {/* <HomePage/> */}
        
    </React.Fragment>
  );
}

export default App;
