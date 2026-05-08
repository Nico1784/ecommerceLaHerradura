import { useParams } from 'react-router';
import {useState,useEffect} from 'react';
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import db from "../../assets/data/data.js";
import { collection, getDocs, query , where} from 'firebase/firestore';
   


function ItemListContainer() {
     
    const [productos, setProductos] = useState([]) //  
    const [loading, setLoading]= useState(true)
    const { rubro } =useParams()  

    const getProducts = async()=>{
       try {         
         const productsRef = collection(db, "products");
         
         const dataDb= await getDocs(productsRef)
         
         const data= dataDb.docs.map((productDb)=>{

           return {id: productDb.id, ...productDb.data()}
         });
         
         setProductos(data)

      }catch (error) {
         console.log(error)
      }finally{
         setLoading(false)
      }
    }

    const getProductByRubro= async()=>{
      
      try {

       const productsRef = collection(db, "products");

       const q = query(productsRef, where("rubro", "==", rubro));

       const dataDb = await getDocs(q);

       const data = dataDb.docs.map((productDb) => {

         return { id: productDb.id, ...productDb.data() }
        });

         setProductos(data);

        console.log(data);
        
      }catch (error) {
        console.log(error)
        
      }finally{
      setLoading(false)
     }
    }


    useEffect( ()=> {

      if(rubro){
         getProductByRubro()
      }else{
         getProducts()
      }
    
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