import { useState, useEffect } from "react";
import getServiceBanner from "../api/getServiceBanner";
import type { Banner } from "../types";

const useServiceBanner = () => {
  const [serviceBanner, setServiceBanner] = useState<Banner[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getServiceBanner()
      .then((res) => {
        setServiceBanner(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { serviceBanner, loading, error };
};

export default useServiceBanner;
