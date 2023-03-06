import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

const  HomeScreen = (props) => {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {
      
    };
  }, []);


  return (
    <>
      <ul className="filter">


      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product.id}>{product.nombre}</Link>
                </div>
                <div className="product-brand">{product.nombre}</div>
                <div className="product-price">${product.precio}</div>
                <div className="product-rating">
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
