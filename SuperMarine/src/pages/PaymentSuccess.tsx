// PaymentSuccess.tsx
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function PaymentSuccess() {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (!sessionId) return;

    axiosInstance.get(`/api/payments/session/${sessionId}/`).then((res) => {
      setInfo(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Payment Successful 🎉</h1>
      {info && (
        <div className="mt-4">
          <p>Status: {info.payment_status}</p>
          <p>
            Amount: {info.amount_total} {info.currency?.toUpperCase()}
          </p>
        </div>
      )}
      <p className="mt-2">
        Your booking has been confirmed. Check your email for details.
      </p>
    </div>
  );
}
