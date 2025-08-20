import { useEffect,useState } from "react";
import getNumbers from "../api/getNumbers";
import type { Numbers } from "../types";


const useNumbers = () => {
    const [numbers, setNumbers] = useState<Numbers | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getNumbers()
            .then((res) => {
                setNumbers(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            }
        );
    }, []);

    return { numbers, loading, error }
};

export default useNumbers