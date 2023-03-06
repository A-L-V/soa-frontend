import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">

          <div className="brand">
            <button >&#9776;</button>
            <Link to="/">
              <img src='https://plazavea.vteximg.com.br/arquivos/LogoPlazaVea.svg' alt='imagen'/>            

            </Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
             
              <div className="dropdown">
              <Link to="/products">Products</Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/" exact element={<HomeScreen />} />
            </Routes>

          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
