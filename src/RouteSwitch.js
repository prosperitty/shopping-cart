import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import App from './App';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
