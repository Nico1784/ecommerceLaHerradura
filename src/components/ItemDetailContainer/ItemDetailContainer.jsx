import  {useState, useEffect } from 'react'

import "./ItemDetailContainer.css"

import {getProductById} from "../../assets/data/data.js"

import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router"



function ItemDetailContainer() {
   
   const [product, setProduct] = useState([]) //  
   const [loading, setLoading]= useState(true)
   const {idproduct} =useParams()

  
    
    useEffect( ()=> {
   
    getProductById(idproduct)

     .then( (data) => {
       setProduct(data)
      //  console.log(data)   

     } )

     .catch(  (error) => { console.log(error) }  )

     .finally( ()=>{setLoading(false)} )

  },[idproduct])


   

  return (

   <div className=''>
   
      {
          loading=== true 
           ? (<div>Cargando Productos.....</div>)
           : ( <ItemDetail product={product} /> ) 
      } 
      
      

   </div> 
 

  )

 

    
 
}

export default ItemDetailContainer