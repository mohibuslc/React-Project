import React from 'react';
import './style.css'
export default function Product({product, evenHandler}) {
  return (
    <div className='product-continer'>
      {product && product.map((item , idx) => {
        return (
          <div className="container" key={idx}>
         
            <img src={item.img} alt="" />
            <p>Product Name : {item.name}</p>
            <p>Price:<span>${item.price}</span></p>
            <button className="btn" onClick={()=>evenHandler(item)}>ADD-PRODUCT</button>
            
          </div>
        );
      })}
    </div>
  );
}
