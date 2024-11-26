import React from "react";
import CheckoutButton from "../components/CheckoutButton";

const CheckoutPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.checkoutCard}>
        <h1 style={styles.heading}>Checkout</h1>
        <p style={styles.subheading}>Complete your purchase securely</p>

        
        {/* <div style={styles.summarySection}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>
          <ul style={styles.summaryList}>
            <li style={styles.summaryItem}>
              <span>Product 1</span>
              <span>$50.00</span>
            </li>
            <li style={styles.summaryItem}>
              <span>Product 2</span>
              <span>$30.00</span>
            </li>
            <li style={styles.summaryItem}>
              <span>Shipping</span>
              <span>$5.00</span>
            </li>
          </ul>
          <div style={styles.total}>
            <span>Total</span>
            <span>$85.00</span>
          </div>
        </div> */}

        <div style={styles.paymentSection}>
          <CheckoutButton />
        </div>

        <div style={styles.securityText}>
          <p>All payments are processed securely via Stripe.</p>
          <img
            src="./secure.jpg" // Replace with your secure payment badge image path
            alt="Secure Payment"
            style={styles.securityImage}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)", // Subtle gradient for a modern look
    padding: "20px",
  },
  checkoutCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "30px",
  },
  summarySection: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "30px",
  },
  summaryTitle: {
    fontSize: "1.25rem",
    color: "#333",
    marginBottom: "15px",
  },
  summaryList: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "1rem",
    color: "#555",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
    marginTop: "10px",
  },
  paymentSection: {
    marginBottom: "20px",
  },
  securityText: {
    fontSize: "0.85rem",
    color: "#777",
    marginTop: "20px",
  },
  securityImage: {
    marginTop: "10px",
    width: "150px",
  },
};

export default CheckoutPage;
