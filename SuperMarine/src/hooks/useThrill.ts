import getThrill from "../api/getThrill";
import { useState, useEffect } from "react";
import type { ThrillMeetAdventure } from "@/types";

const useThrill = () => {
    const [thrill, setThrill] = useState<ThrillMeetAdventure[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getThrill()
            .then((res: ThrillMeetAdventure[]) => {
                setThrill(res);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { thrill, loading, error };
};

export default useThrill;