import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        stars.push(
          <span key={i} className="star filled">
            &#9733;
          </span>
        ); // Filled star
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="product-heading">All Products List</h1>
      <div className="product-list">
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title.substring(0, 25) + "..."}</h2>
              <p>{product.description.substring(0, 70) + "..."}</p>
              <p className="price">
                Price: <span className="price-span">${product.price}</span>
              </p>
              <p>Rating: {renderStars(product.rating.rate)}</p>
              {isInCart ? (
                <button
                  onClick={() => removeFromCart(product)}
                  className="remove-button"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
