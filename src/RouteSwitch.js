import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import App from './App';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

const RouteSwitch = () => {
  const [cart, setCart] = useState();

  const [itemQuantity, setItemQuantity] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCharge, setTotalCharge] = useState({});

  const handleChange = (event) => {
    const name = event.target.name
    setItemQuantity((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
    console.log(itemQuantity);
  }

  const addToCart = (event) => {
    let index = parseInt(event.target.name);
    // console.log(event.target.name);
    setTotalQuantity((prevState) => (
      prevState + parseInt(itemQuantity[index])
    ));
  }
  return (
    <BrowserRouter>
      <Nav cartQuantity={totalQuantity} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} handleChange={handleChange} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
