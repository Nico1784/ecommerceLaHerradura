
import {useState,} from "react"
import "./Count.css"

function Count({stock,addToCart}) {
 
 
 const [counter,setCounter]= useState(1)

 const Increase = ()=>{
    if(stock>counter){
        setCounter(counter+1)
    }
 };

 const  Decrease = ()=>{
    if(counter>1){
      setCounter(counter-1) 
    }
     
 } ;

  return (
    <div className='counter'>
     
     <button onClick={Increase}  className='counter-button'> + </button>

     <h2>{counter}</h2>

     <button onClick ={Decrease} className='counter-button' > - </button>
     
     <button  onClick={ ()=>addToCart(counter) } className='counter-button' > Agregar al Carrito </button>
    </div>
      
    
  )
}

export default Count