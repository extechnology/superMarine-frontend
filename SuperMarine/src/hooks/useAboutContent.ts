import { useState, useEffect } from "react";
import getAboutContent from "../api/getAboutContent";
import type { AboutContent } from "../types";

const useAboutContent = () => {
  const [aboutContent, setAboutContent] = useState<AboutContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAboutContent()
      .then((res) => {
        setAboutContent(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { aboutContent, loading, error };
};

export default useAboutContent;
