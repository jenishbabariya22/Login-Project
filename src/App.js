import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Category from './pages/admin/category/Category';
import Product from './pages/admin/category/product/Product';
import Addcategory from './pages/admin/category/Addcategory';
import Addproduct from './pages/admin/category/product/Addproduct';
// import Addproduct from './pages/admin/category/product/Addproduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/addproduct" element={<Addproduct />} />
          <Route path="/admin/addcategory" element={<Addcategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
