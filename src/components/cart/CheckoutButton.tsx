import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { selectTotalPrice } from "@/store/cartSlice";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const CheckoutButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe.js has not been initialized.");
        return;
      }

      const response = await axios.post("/api/checkout", { cartItems });

      if (response.status !== 200) {
        console.error("Failed to create checkout session.");
        return;
      }

      const { id } = response.data;

      const result = await stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("An error occurred during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleCheckout} disabled={totalPrice === 0 || loading}>
      {loading ? "Processing..." : "Checkout"}
    </Button>
  );
};

export default CheckoutButton;
