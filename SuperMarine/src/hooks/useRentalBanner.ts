import getRentalBanner from "../api/getRentalBanner";
import { useState,useEffect } from "react";
import type { Banner } from "../types";


const useRentalBanner = ()=> {
    const [rentalBanner, setRentalBanner ] = useState<Banner[] | null>(null); 
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getRentalBanner()
          .then((res) => {
            setRentalBanner(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }, []);
    
      return { rentalBanner, loading, error };
}

export default useRentalBanner