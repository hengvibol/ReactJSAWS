import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import {ProductDetail} from './components/productDetail'
import {Shop} from './modules/Shop'
import { Cart } from './modules/Cart';
import { Chechout } from './modules/Chechout';
import { Blog } from './components/blog';
import { Contact } from './components/contact';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Shop />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="/checkout" element={<Chechout />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
