// src/pages/PayWithElement.tsx
import { useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axiosInstance from "@/api/axiosInstance";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order/success`,
      },
    });

    if (error) setError(error.message || "Payment failed");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Processing..." : "Pay now"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}

export default function PayWithElementPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Use your axiosInstance instead of axios
    axiosInstance
      .post("/api/stripe/create-payment-intent/", {
        items: [{ id: "sku_123", qty: 1 }], // send your order items here
        currency: "inr",
        orderId: "order_abc_123", // pass your actual order ID
      })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((err) => {
        console.error("Error creating payment intent:", err);
      });
  }, []);

  if (!clientSecret) return <div>Loading payment...</div>;

  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
