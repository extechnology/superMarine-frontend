import getGallery from "../api/getGallery";
import { useState,useEffect } from "react";
import type { gallery } from "@/types";


const useGallery = () => {
    const [ gallery, setGallery ] = useState<gallery | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<Error | null>(null);

    useEffect(() => {
        getGallery()
          .then((res) => {
            setGallery(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
    }, []);

    return { gallery, loading, error };
}

export default useGallery
