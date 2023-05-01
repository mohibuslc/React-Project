import './style.css'
import {useEffect, useState} from 'react'; 
import axios from 'axios'




export default function Shop(){

    const[product , setProduct] = useState([])

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

    return(
        <div className="shop-continer">
            <div className="product-continer">
                <h1>This is Product Continer : {product.length}</h1>


            </div>
            <div className="cart-continer">
                <h3> Order-Summery</h3>

            </div>

            
        </div>
    )
}