  import "./Cart.css"
  import {useContext,useState} from "react"
  import{CartContext} from "../../Context/CartContext/CartContext"
  import Alert from "../Alert/Alert"
  import Swal from "sweetalert2";
  import {Link} from "react-router"





  function Cart() {
    
    const {cart,totalCart,vaciarCart,deleteItemCart,addQuantity,deleteQuantity} = useContext(CartContext) 

      
     if (cart.length > 0) {
    
      return (
           
          

          <div className="cart-container">

              {cart.map((productCart) =>( 

                <div key={productCart.id} className="cart-item">

                  <img src={productCart.img} className="cart-img"></img>
                  <p>{productCart.nombre}</p> 
                  <p>Cantidad: {productCart.quantity}</p>
                  <p>Precio Unitario ${(productCart.precio).toLocaleString("es-AR")}</p>
                  <p>Subtotal: ${(productCart.precio * productCart.quantity).toLocaleString("es-AR")}</p>

                  <button onClick={ ()=>addQuantity(productCart.id) } className="cart-button">+</button>

                  <button onClick={ ()=>deleteQuantity(productCart.id) } className="cart-button">-</button>

                  <button onClick={ ()=>deleteItemCart(productCart.id) } className="cart-button">❌</button>

                      
              </div> 
              
              ))}
              <div className="cart-footer">
                 <h2 className="total-cart">Total Carrito ${ ( totalCart() ).toLocaleString("es-AR") }</h2>

                 <button onClick={()=>vaciarCart()}  className="button-vaciar">Vaciar</button>
                 
                  <Link to = "/checkout">
                  <button  className="button-vaciar">Confirmar Compra</button>
                  </Link>

              </div>
             
              
          </div>
    )

   } else {
    return <Alert texto={"Carrito vacío"} />
   }
  }

  export default Cart