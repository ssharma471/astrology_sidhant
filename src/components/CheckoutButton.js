import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QO3rYLFc1YLcRcDdwMYfONHn1gag0YyJvRg4z9Gu4DInJZdlx4PRwSb9UJDbxaeTshiFTx1iYu8iLmysvFKTwsn005cSDeuKq");

const CheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call the backend to create a Checkout session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#1E90FF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
