
import "./Item.css"

import {Link} from "react-router"


function Item({producto}) {
  return (
   
      <div className='card'> 
                <p className="card-titulo">{producto.nombre}</p>
                <img className="card-imagen" src={producto.img} alt= {producto.nombre}/>
                <p className="card-precio">${ (producto.precio).toLocaleString("es-AR") }</p>
                <Link to={`/detail/${producto.id}`}> <button>Ver Producto</button > </Link>
         </div>

  )
}

export default Item



