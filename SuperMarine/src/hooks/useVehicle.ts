import getVehicle from "../api/getVehicle";
import type { vehicle } from "../types";
import { useState,useEffect } from "react";

const useVehicle = () => {
    const [ vehicle, setVehicle ] = useState<vehicle | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<Error | null>(null);

    useEffect(() => {
        getVehicle()
          .then((res) => {
            setVehicle(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
    }, []);

    return { vehicle, loading, error };
}

export default useVehicle