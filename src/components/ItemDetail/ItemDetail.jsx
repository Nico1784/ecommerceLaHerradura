
import "./ItemDetail.css"
import Count from "../Count/Count"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"



function ItemDetail({product}) {


 const {addProductInCart} = useContext(CartContext) //consumo la var global

  // Addtocart: •levanta variable de Count
  //            • return obj producto + quantity

 const addToCart = (counter)=> {

   const newProduct = {...product, quantity:counter}
  
   addProductInCart(newProduct);

 
  
 }


  return (

   <div className="contenedor-ItemDetail">

     <img className="img-ItemDetail" src={product.img} alt={product.nombre} />

     <div className="contenido-ItemDetail">

       <h2>{product.nombre}</h2>
       
       <p>{product.descrip}</p>

       <p>Disponible: {product.stock}</p>
       

        <Count stock={product.stock} addToCart={addToCart} > </Count>
       
      
      
    </div>
  
  </div>




  )
}

export default ItemDetail