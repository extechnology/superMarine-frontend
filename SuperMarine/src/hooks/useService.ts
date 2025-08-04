import { useState, useEffect } from "react";
import getService from "../api/getService";
import type { service } from "@/types";

const useService = () => {
  const [service, setService] = useState<service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getService()
      .then((res) => {
        setService(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { service, loading, error };
};

export default useService;