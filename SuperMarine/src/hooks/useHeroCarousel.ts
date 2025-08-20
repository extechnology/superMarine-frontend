import { useState, useEffect } from "react";
import getHeroCarousel from "../api/getHeroCarousel";
import type { heroCarousel } from "@/types";

const useHeroCarousel = () => {
  const [hero, setHero] = useState<heroCarousel[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getHeroCarousel()
      .then((res) => {
        setHero(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { hero, loading, error };
};

export default useHeroCarousel;
