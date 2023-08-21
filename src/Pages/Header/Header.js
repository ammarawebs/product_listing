import React, { useEffect, useReducer } from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsPlus ,BsDash } from "react-icons/bs"
import axios from '../../axios';


const initial_Cart = false
// const initial_cartItems = []

const Reducer_cart = (state , action  ) =>{

  switch(action.type){
    case 'CART_HANDLING' : 
      if(state === false){
        state = true;
        return state
      }
      else{
        state = false
        return state
      }
      break
  }
}

// const Reducer_cartItems = (state , action) => {
//   switch(action.type){
//       case 'GETTING_DATA' :
//       return action.payload 
//       break
// }

// }



const Header = ({selectedItem}) => {

  const [isCart , dispatch_cart] = useReducer(Reducer_cart , initial_Cart)
  // const [cartItems , dispatch_cartItems] = useReducer(Reducer_cartItems , initial_cartItems)


  





  // useEffect(()=>{

  // }, [])


  return (
    <>
    <div className='header_main'>
        <div className="header_second_main">
            <h1 className='logo'>Fake Store</h1>
            <div className='cart'>
              <button  className='cart_btn' onClick={()=> dispatch_cart({type: 'CART_HANDLING'})}>
                <FaShoppingCart size='25px'/>
              </button>
              

              
            </div>
        </div>

        
    </div>

    { isCart ? <div className='SideBar_Main'>
          
          <div className='sidebar_second_main'>
            <button className='close_cart_btn' onClick={()=>dispatch_cart({type : 'CART_HANDLING'})}><RxCross1 size='25px'/></button>
            <h1>Cart</h1>
            <div className='cartItems'>
                {selectedItem.map((item , index)=>{
                  const {id ,title , category, description ,image,price ,quantity } = item 

                  return <div className='cartItem'>
                    <div className="cart_img_sec">
                      <img src={image} alt="" className='cart_image'/>
                    </div>
                    <div className='cart_details'>
                      <div className='cart_title'>
                      <div>
                         <p className='cart_title_title'>{title}</p>
                      </div>
                      <div className='quantity_btns'>
                          <div><button><BsPlus/></button></div>
                          <p> {quantity} </p>
                          <div><button> <BsDash/> </button></div>
                      </div>
                      
                      </div>
                      
                      <div className='cart_price' ><p >${price}</p></div>
                    </div>
                    
                  </div>
                })}
              </div>
            
            
          </div>
          </div>

      : <></> }

    

        </>
  )
}

export default Header