import { useState,useEffect } from "react";
import getContactBanner from "../api/getContactBanner";
import type { Banner } from "../types";


const useContactBanner = ()=> {
    const [contactBanner, setContactBanner ] = useState<Banner[] | null>(null); 
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getContactBanner()
          .then((res) => {
            setContactBanner(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }, []);
    
      return { contactBanner, loading, error };
}

export default useContactBanner