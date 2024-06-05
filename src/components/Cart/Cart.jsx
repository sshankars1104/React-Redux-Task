import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "../../store/cartSlice";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const handleQuantityChange = (product, event) => {
    const quantity = Number(event.target.value);
    dispatch(updateQuantity({ product, quantity }));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <img className="emptyCart"
          src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
          alt="Your cart is empty"
        />
        <Link className="homeLink" to="/">
          &#11013; Back To Home
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <div className="cart-item-left">
            <img
              src={product.image}
              alt={product.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
            </div>
          </div>
          <div className="cart-item-right">
            <label htmlFor={`quantity-${product.id}`}>Qty:</label>
            <select
              id={`quantity-${product.id}`}
              value={product.quantity}
              onChange={(event) => handleQuantityChange(product, event)}
            >
              {[...Array(10).keys()].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleRemove(product)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>
          Total Quantity: 0{cart.reduce((acc, item) => acc + item.quantity, 0)}
        </h3>
        <h3>
          Total Amount: $
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
