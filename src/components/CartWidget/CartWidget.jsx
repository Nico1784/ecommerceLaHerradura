import "./CartWidget.css"
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";






function CartWidget() {
 
  
 const {quantityCart}=useContext(CartContext)

  return (
    
    <Link to="/cart">
       <div className="icon-cart">
        
         {quantityCart() === 0 ? (
        <RiShoppingCartLine />
        ) : (
        <>
        <RiShoppingCartLine />
         <p className="icon-cart-burbuja">{quantityCart()}</p>
        </>
  )}
       </div>

    </Link>
    
     
     

    
  )
}

export default CartWidget