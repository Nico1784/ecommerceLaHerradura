import {createContext, useState} from "react"
import Swal from "sweetalert2";


const CartContext=createContext(null)

const CartProvider =({children}) =>{

const [cart,setCart] =useState([]);


  //Funciones Carrito
 
  const addProductInCart = (newProduct) => {

  const existe = cart.find((p) => p.id === newProduct.id)

  if (existe) {

    // Validar stock
    if (existe.quantity + newProduct.quantity > existe.stock) {

      Swal.fire(
        "Sin Stock!",
        "Cantidad solicitada no disponible",
        "warning"
      )

      return  // corto la ejecusion del codigo cuando acepto el swal.fire
    }

    const Productnew = cart.map((p) =>

      p.id === newProduct.id

        ? { ...p, quantity: p.quantity + newProduct.quantity }
        : p
    )

    Swal.fire(
      "Agregado!",
      "Producto añadido al carrito",
      "success"
    )

    setCart(Productnew)

  } else {

    // Validar stock cuando es nuevo producto
    if (newProduct.quantity > newProduct.stock) {

      Swal.fire(
        "Sin Stock!",
        "Cantidad solicitada no disponible",
        "warning"
      )

      return
    }

    Swal.fire(
      "Agregado!",
      "Producto añadido al carrito",
      "success"
    )

    setCart([...cart, newProduct])
  }
}

  const totalCart = ()=>(
    cart.reduce((acumulador,productCart) => {
     return acumulador +(productCart.quantity * productCart.precio )
   },0)
  );

  const quantityCart =()=>{
  return cart.length
  };

  const vaciarCart = () =>{

    Swal.fire({
      title: "Desea Eliminar todos los Productos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"

    }).then((result) => {

      if (result.isConfirmed) {
         Swal.fire({
           title: "Eliminados!",
           text: "Todo los Productos han sido Eliminados.",
           icon: "success"
         });
       setCart([])
      }
    });

   
  }

  const deleteItemCart=(idEliminar)=>{
    const newCart= cart.filter( product=>product.id !== idEliminar)
    setCart(newCart)

  }

  const addQuantity = (idItem)=>{

    const newCart= cart.map( (p)=>

      p.id===idItem && p.quantity < p.stock

      ? {...p, quantity: p.quantity + 1}
      : p 
     )
      setCart(newCart)

  }

  const deleteQuantity = (idItem)=>{

    const newCart= cart.map( (p)=>

      p.id===idItem && p.quantity > 1

      ? {...p, quantity: p.quantity - 1}
      : p 
     )
      setCart(newCart)
  }

  const confirmedCart = () =>{
      setCart([])
      Swal.fire("Confirmado!", "Orden de Compra Generada", "success");
      }
    

 
 return(

   <CartContext.Provider value={  {cart,
                                  addProductInCart,totalCart,
                                  quantityCart,vaciarCart,
                                  deleteItemCart, addQuantity,deleteQuantity,confirmedCart}  }>
       {children}
   
   </CartContext.Provider>
 )
}


export {CartProvider, CartContext}



