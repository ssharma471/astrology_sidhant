// src/pages/YourCart.js

import React from 'react';
import { useAtom } from 'jotai';
import { cartState } from 'store';
import Link from 'next/link';
import Image from 'next/image';

// Custom hook for managing cart operations
const useCart = () => {
  const [cart, setCart] = useAtom(cartState);

  const addToCart = (service) => {
    const isInCart = cart.some((item) => item.name === service.name);

    if (!isInCart) {
      setCart([...cart, service]);
      alert(`${service.name} added to favourites!`);
    } else {
      alert(`${service.name} is already in favourites!`);
    }
  };

  const removeFromCart = (service) => {
    const updatedCart = cart.filter((item) => item.name !== service.name);
    setCart(updatedCart);
    alert(`${service.name} removed from favourites!`);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};

const YourCart = () => {
  const { cart, removeFromCart } = useCart();

  // Array of cart items
  const cartItems = cart.map((item, index) => (
    {
      id: index,
      name: item.name,
      price: item.price,
      image: item.image,
    }
  ));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Corrected Link structure */}
          <Link href="/dashboard" legacyBehavior>
            <a className="navbar-brand">
              <Image src="/logo.jpeg" alt="Logo" width={30} height={30} className="d-inline-block align-top" />
              <span className="ms-2">Astrology</span>
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" legacyBehavior>
                  <a className="nav-link">Our Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/yourCart" legacyBehavior>
                  <a className="nav-link">View Favourites</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="services-grid">
          {cartItems.map((item) => (
            <div className="service-item" key={item.id}>
              <div className="image-container">
                <Image src={item.image} alt={item.name} width={200} height={200} layout="responsive" />
              </div>
              <h3 className="service-name">{item.name}</h3>
              <p className="service-price">{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      {/* Styles */}
      <style jsx>{`
        .services-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 20px;
          padding: 20px;
        }
        .service-item {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          text-decoration: none;
          width: 200px;
        }
        .image-container {
          width: 100%;
          height: 200px; /* Set a fixed height for the image container */
          overflow: hidden;
          border-radius: 8px;
        }
        .image-container img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .service-item:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .service-name {
          font-size: 18px;
          margin-top: 15px;
        }
        .service-price {
          font-size: 16px;
          color: #888;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default YourCart;

export { useCart }; // Export the custom hook
