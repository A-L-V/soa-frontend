import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">

          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <img src='https://plazavea.vteximg.com.br/arquivos/LogoPlazaVea.svg'/>            

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
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>
            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Routes>

              <Route path="/orders" element={OrdersScreen} />
              <Route path="/profile" element={ProfileScreen} />
              <Route path="/order/:id" element={OrderScreen} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/shipping" element={ShippingScreen} />
              <Route path="/payment" element={PaymentScreen} />
              <Route path="/placeorder" element={PlaceOrderScreen} />
              <Route path="/signin" element={SigninScreen} />
              <Route path="/register" element={RegisterScreen} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={CartScreen} />
              <Route path="/category/:id" element={HomeScreen} />
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
