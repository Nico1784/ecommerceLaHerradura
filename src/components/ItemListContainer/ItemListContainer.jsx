import { useParams } from 'react-router';
import {useState,useEffect} from 'react';
import { getProducts } from "../../assets/data/data.js";
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

   


function ItemListContainer() {
     
    const [productos, setProductos] = useState([]) //  
    const [loading, setLoading]= useState(true)
    const { rubro } =useParams()  
    
    console.log(rubro)


    useEffect( ()=> {
   
    getProducts()

     .then( (data) =>{
        setLoading(true)
        if (rubro){
       //filtrar si rubro tiene algun valor.
        const productosFiltrados = data.filter( (producto)=> producto.rubro === rubro   )
        setProductos(productosFiltrados)
        console.log(productosFiltrados)

       }else{
       //si rubro no tiene nngún valor : Mostrar todos los productos
        setProductos(data)
       }
      })
     .catch(  (error) => { console.log(error) }  )

     .finally( ()=>{setLoading(false)} )

  },[rubro])


  return (

   <div className='item-list-container'>
   
      {
          loading=== true ? (<div className='cargando'>Cargando Productos.....</div>)
           : ( <ItemList productos={productos} /> ) 
      } 
      
      

   </div> 
 

  )
}

export default ItemListContainer