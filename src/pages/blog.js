import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Handle the auto-swipe effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [posts.length]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm bg-primary`}
        style={{
          transition: "background-color 0.3s",
          backgroundColor: "transparent",
        }}
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
              <span className="ms-2 fw-bold fs-3 text-black">Astrology</span>
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
                <Link href="/services" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Our Services</a>
                </Link>
              </li>
             
              <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-light">Your Cart</a>
                    </Link>
                  </li>
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

      {/* Blog Posts Section with Background Image */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/wall.jpg')`, // Assuming your image is stored in the public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          paddingTop: "5rem",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-5" style={{ color: 'white' }}>Latest Astrology Blog Posts</h2>

          {posts.length > 0 ? (
  <div
    key={currentPostIndex}
    className="mb-4 shadow-sm rounded"
    style={{
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background for readability
      transition: 'transform 0.2s',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02')} // Scale effect on hover
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Reset scale
  >
    <h3 className="fw-bold">{posts[currentPostIndex].title}</h3>
    <p className="text-muted">
      {posts[currentPostIndex].date} by {posts[currentPostIndex].author}
    </p>
    <p>{posts[currentPostIndex].content}</p>
  </div>
) : (
  <p className="text-white">Loading posts...</p>
)}

          {/* Pagination controls (optional, for manual navigation) */}
          <div className="d-flex justify-content-center mt-3">
            {posts.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentPostIndex(index)}
                className={`mx-2 p-2 rounded-circle ${index === currentPostIndex ? 'bg-primary' : 'bg-secondary'}`}
                style={{
                  cursor: "pointer",
                  width: "12px",
                  height: "12px",
                  display: "inline-block",
                }}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2024 Astrology World. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;