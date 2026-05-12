import  {useState, useEffect } from 'react'

import "./ItemDetailContainer.css"

import db from "../../assets/data/data.js"

import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router"
 
import {doc,getDoc} from "firebase/firestore"

import { MoonLoader } from 'react-spinners'



function ItemDetailContainer() {
   
   const [product, setProduct] = useState([]) //  
   
   const [loading, setLoading]= useState(true)
   
   const {idproduct} =useParams()

  
   const getProduct= async() => { 
      try {
         const productRef = doc(db,"products",idproduct)

         const dataDb = await getDoc(productRef)

         const data = {id:dataDb.id, ... dataDb.data()}

         setProduct(data)
         
      } catch (error) {
         console.log(error)
         
      }finally{
         setLoading(false)
      }
   }
    
    useEffect( ()=> {

      getProduct()
     
   },[idproduct])

   
   return (

   <div className=''>
   
      {
          loading=== true 
           ? (<div> <MoonLoader/> Cargando Productos.....</div>)
           : ( <ItemDetail product={product} /> ) 
      } 
      
      

   </div> 
 

  )

 

    
 
}

export default ItemDetailContainer