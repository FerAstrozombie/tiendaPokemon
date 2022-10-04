import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/Navbar';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Cart from "./Components/Cart/Cart";
import Inicio from './Components/Inicio/Inicio';
import {CartProvider} from "./Components/context/CartProvider"
import Footer from './Components/Footer/Footer';
import ScrollButton from './Components/ScrollButton/ScrollButton';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <ScrollButton />
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='productos' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}/>          
            <Route path='detalles/:id' element={<ItemDetailContainer /> } />
            <Route path='category/:categoryName' element={<ItemListContainer /> } />
            <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;