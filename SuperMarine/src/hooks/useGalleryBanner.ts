import { useState,useEffect } from "react";
import getGalleryBanner from "../api/getGalleryBanner";
import type { Banner } from "../types";


const useGalleryBanner = () => {
    const [galleryBanner,setGalleryBanner] = useState<Banner[]>([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getGalleryBanner()
          .then((res) => {
            setGalleryBanner(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }, []);
    
      return { galleryBanner, loading, error };
}

export default useGalleryBanner