import getVehicle from "../api/getVehicle";
import type { Vehicle } from "../types";
import { useState, useEffect } from "react";

const useVehicle = () => {
  const [vehicle, setVehicle] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getVehicle()
      .then((res: Vehicle[]) => {
        // 👈 API returns Vehicle[]
        setVehicle(res);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { vehicle, loading, error };
};

export default useVehicle;
