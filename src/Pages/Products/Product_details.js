import React from 'react'

const Product_details = (props) => {
    console.log(props.product_title)
  return (
    <>
        <h1>{props.product_title}</h1>
        <h1>Hello Product Details</h1>
    </>
  )
}

export default Product_details