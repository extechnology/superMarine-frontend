// src/stripe/StripeProvider.tsx
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import type { PropsWithChildren } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export default function StripeProvider({ children }: PropsWithChildren) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
