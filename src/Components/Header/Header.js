import Load from '../../images/logo.png'

import './style.css'

export default function Header(){

    return(
      
           
            <nav className="header">
            <img  src={Load} alt='/'/>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>

            </nav>

       
    )
    
}