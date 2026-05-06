
import "./NavBar.css"
import Logo from "../../assets/img/logo.png"
import { Link } from "react-router"
import CartWidget from "../CartWidget/CartWidget"



function NavBar() {
  return (
    <header className="contenedor-header">
       
       <Link to ="/">
          <div className="logo">
             <img  src={Logo} alt="Logo"/>
             <p>Ferretería La Herradura</p>
        </div>
       </Link>

        <nav>
            
           <Link to="/rubro/Herramientas Electricas"> <li>Herramientas Electricas</li> </Link> 
           <Link to="/rubro/Herramientas Manuales"> <li>Herramientas Manuales</li>   </Link>   
              
        </nav>

        <CartWidget/>
        
    </header>
    )


    
  

}
export default NavBar
