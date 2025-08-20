import { useEffect, useState } from "react";
import getAdventureGallery from "../api/getAdventureGallery";
import type { ThrillMeetAdventure } from "../types";

const useAdventureGallery = () => {
  const [gallery, setAdvGallery] = useState<ThrillMeetAdventure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAdventureGallery()
      .then((res) => {
        setAdvGallery(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { gallery, loading, error };
};

export default useAdventureGallery;
