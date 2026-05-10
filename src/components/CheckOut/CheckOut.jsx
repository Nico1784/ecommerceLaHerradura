import "./Checkout.css"
import { useContext, useState } from "react"
import React from 'react'
import Swal from "sweetalert2";
import{CartContext} from "../../Context/CartContext/CartContext"
import { collection, addDoc } from "firebase/firestore";
import db from "../../assets/data/data.js";



function CheckOut() {

 const{cart,totalCart,confirmedCart}=useContext(CartContext)
  
 const [dataForm, setdataForm] = useState({
    fullname:"",
    phone:"",
    email:""
  })
    
 const changeInput = (event)  => {
    setdataForm({...dataForm, [event.target.name]: event.target.value})
  }

 const submitForm = async (event) => {

      event.preventDefault();

      if (cart.length === 0) {

        Swal.fire(
          "Carrito Vacío!",
          "No se Puede Enviar una OC sin Productos",
          "error"
        );

        return;  // Sin el return, el código sigue ejecutándose y termina creando igualmente la orden en Firebase.O sea, la alerta sola no detiene nada.
      }

      // validar campos vacíos
      if (
        dataForm.fullname.trim() === "" ||
        dataForm.phone === "" ||
        dataForm.email.trim() === ""
      ) {

        Swal.fire(
          "OC Vacía!",
          "Debe completar los datos del comprador",
          "error"
        );

        return; // Sin el return, el código sigue ejecutándose y termina creando igualmente la orden en Firebase. O sea, la alerta sola no detiene nada.
      }

      const order = {
        buyer: { ...dataForm },
        productsOrder: cart,
        total: totalCart(),
        date: new Date()
      };

      try {

        const ordersRef = collection(db, "orders");

        const response = await addDoc(ordersRef, order);

        Swal.fire(
          "Orden generada!",
          `ID: ${response.id}`,
          "success"
        );

        confirmedCart();

        setdataForm({
          fullname:"",
          phone:"",
          email:""
        });

      } catch (error) {

        console.log(error);

        Swal.fire(
          "Error",
          "No se pudo guardar la orden",
          "error"
        );
      }
  }


  
    return (
    <div>
       <form onSubmit={submitForm} >

          <input type="text" name="fullname" value={dataForm.fullname} onChange={changeInput} placeholder="Ingrese Nombre Completo"/> 
          <input type="number" name="phone" value={dataForm.phone} onChange={changeInput} placeholder="Ingrese Su Celular" />
          <input type="email" name="email" value={dataForm.email} onChange={changeInput} placeholder="Ingrese Su email" />
          <button type="submit" className="button-checkOut">Enviar Orden</button>
       

       </form>

    </div>
  )
}

export default CheckOut