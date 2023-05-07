import './style.css'
import {useEffect, useState} from 'react'; 
import axios from 'axios'
import Product from '../Product/Product';
export default function Shop(){

    const[product , setProduct] = useState([]) ; 

    const[cart , setCart]=useState([]) ;


    useEffect(()=>{
        async function fetchData(){

            try{
                const res = await axios("fakeData.json")
                setProduct(res.data)
            }catch(error){
                console.log(error)
            }
        }
            fetchData()

    },[])

function evenHandler(product){

   const newCart =[...cart , product];

   setCart(newCart)
}

    return(
        <div className="shop-continer">
            <div className="product-continer">
              
            { 
                <Product product={product} evenHandler={evenHandler}></Product>
            }

            </div>
            <div className="cart-continer">
                <h3> Order-Summery</h3>
                <h1>Selected-ITEM: {cart.length}</h1>

            </div>

            
        </div>
    )
}