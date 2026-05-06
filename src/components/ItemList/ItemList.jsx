
import Item from "../Item/Item"
import  "./ItemList.css"

function ItemList({productos}) {


  return (

    <div className='contenedor-cards'>

      { productos.map( (producto)=>( 
        
      <Item key={producto.id} producto={producto}/>

      )  )

      };

    </div>


  )


}

export default ItemList