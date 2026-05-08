
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router"
import { CartProvider } from './Context/CartContext/CartContext'
import Cart from  "./components/Cart/Cart"
import Alert from './components/Alert/Alert'
import CheckOut from './components/CheckOut/CheckOut'

function App() {

  return (
   <BrowserRouter>

   <CartProvider>

     <>
       <NavBar/>
       <Routes>
         <Route path="/" element={<ItemListContainer/>} />  
         <Route path="/rubro/:rubro" element={<ItemListContainer/>} />  
         <Route path="/detail/:idproduct" element={<ItemDetailContainer/>} />  
         <Route path="/cart" element={<Cart/>} /> 
         <Route path="/checkout" element={<CheckOut/>} /> 
         
       </Routes>
    </>

   </CartProvider>
   
   </BrowserRouter>
    
  )
}

export default App
