import { useEffect, useState } from "react";
import getBookAdventure from "../api/getBookAdventure";
import type { BookAdventure } from "../types";

const useBookAdventure = () => {
  const [bookAdventure, setBookAdventure] = useState<BookAdventure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBookAdventure()
      .then((res) => {
        setBookAdventure(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { bookAdventure, loading, error };
};

export default useBookAdventure;
