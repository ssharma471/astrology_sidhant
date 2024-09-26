// src/pages/YourCart.js

import React, { useState, useEffect } from "react";
import { useAtom } from 'jotai';
import { cartState } from 'store';
import Link from 'next/link';
import Image from 'next/image';
import { readToken, removeToken } from "@/lib/tokenfunc";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);


  useEffect(() => {
    let tokenData = readToken();
    if (tokenData) {
      setUsername(tokenData.name);
    }
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isLoggedIn = username !== null;

  // Hover effect handler
  const handleNavHover = () => {
    setNavHovered(true);
  };

  const handleNavLeave = () => {
    setNavHovered(false);
  };

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
      {/* Navbar */}
      <nav
  className={`navbar navbar-expand-lg fixed-top shadow-sm ${navHovered ? "bg-hover" : "bg-dark"}`}
  style={{
    transition: "background-color 0.3s",
    backgroundColor: navHovered ? "#333" : "transparent", // Changed the hover color to dark grey
  }}
  onMouseEnter={handleNavHover}
  onMouseLeave={handleNavLeave}
>
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-light ${dropdownOpen ? "show" : ""
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
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-light">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {/* Search bar */}
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
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
