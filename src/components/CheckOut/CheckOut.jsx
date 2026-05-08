import "./Checkout.css"
import { useState } from "react"
import React from 'react'




function CheckOut() {
  
  const [dataForm, setdataForm] = useState({
    fullname:"",
    phone:0,
    email:""
  })
  
    
  const changeInput = (event)  => {
    setdataForm({...dataForm, [event.target.name]: event.target.value})
  }

  const submitForm = () => {
    event.preventDefault();
    console.log(dataForm)
  }
  
  
    return (
    <div>
       <form onSubmit={submitForm}>
          <input type="text" name="fullname" value={dataForm.fullname} onChange={changeInput} placeholder="Ingrese Nombre Completo" />
          <input type="number" name="phone" value={dataForm.phone} onChange={changeInput} placeholder="Ingrese Su Celular" />
          <input type="email" name="email" value={dataForm.email} onChange={changeInput} placeholder="Ingrese Su email" />
          <button type="submit">Enviar Orden</button>
       

       </form>

    </div>
  )
}

export default CheckOut