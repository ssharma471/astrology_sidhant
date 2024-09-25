// src/pages/YourCart.js

import React, { useState } from 'react';
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

const yourCart = () => {
  const { cart, removeFromCart } = useCart();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cartItems = cart.map((item, index) => ({
    id: index,
    name: item.name,
    price: item.price,
    image: item.image,
  }));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setUsername(null);
    alert("Logged out!");
  };

  const isLoggedIn = username !== null;

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm fixed-top">
        <div className="container">
          <Link href="/dashboard" legacyBehavior>
            <a className="navbar-brand d-flex align-items-center">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="d-inline-block align-top rounded-circle"
              />
              <span className="ms-2 fw-bold fs-3 text-primary">Astrology</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link fw-semibold text-white">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-white">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-white">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-white">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-white ${dropdownOpen ? "show" : ""
                        }`}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                      onClick={toggleDropdown}
                    >
                      {username}
                    </a>
                    <ul
                      className={`dropdown-menu dropdown-menu-end border-0 shadow ${dropdownOpen ? "show" : ""
                        }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href="/edit-profile" legacyBehavior>
                          <a className="dropdown-item">Edit Profile</a>
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-white">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Search Bar */}
            <form className="d-flex ms-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-light ms-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-5 pt-5">
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
      </div>

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

export default yourCart;

export { useCart }; // Export the custom hook
