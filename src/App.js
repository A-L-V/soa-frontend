import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import logo from './logo.svg';
function App() {

  return (

    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
    /*<BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
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
    </BrowserRouter>*/
  );
}

export default App;
