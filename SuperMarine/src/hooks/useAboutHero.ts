import { useState,useEffect } from "react";
import getAboutHero from "../api/getAboutHero";
import type { about } from "../types";

const useAboutHero = () => {
    const [ about, setAbout ] = useState<about | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<Error | null>(null);

    useEffect(() => {
        getAboutHero()
          .then((res) => {
            setAbout(res);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
    }, []);

    return { about, loading, error };
}

export default useAboutHero