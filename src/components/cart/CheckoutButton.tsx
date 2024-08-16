import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { selectTotalPrice } from "@/store/cartSlice";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const CheckoutButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCheckout = async () => {
    try {
      // Get the Stripe instance from the promise
      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe.js has not been initialized.");
        return;
      }

      // Send the cart items to your checkout API
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        console.error("Failed to create checkout session.");
        return;
      }

      const session = await response.json();

      if (!session.id) {
        console.error("No session ID returned.");
        return;
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (err) {
      console.error("An error occurred during checkout:", err);
    }
  };

  return (
    <Button onClick={handleCheckout} disabled={totalPrice === 0}>
      Proceed to Checkout
    </Button>
  );
};

export default CheckoutButton;
