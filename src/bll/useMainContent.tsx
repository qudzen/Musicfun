import {useState} from "react";

export const useMainContent = () => {
    const [trackId, setTrackId] = useState< null | string >(null);

    return {
        trackId,
        setTrackId,
    }
}