import {useEffect, useState} from "react";
import {getTracks, type T} from "../api/api.ts";

export function useTracks() {
    const [tracks, setTracks] = useState< Array<T> | null >(null)
    const [selectedTrackId, setSelectedTrackId] = useState< string | null >(null)

    useEffect(() => {
        getTracks()
            .then(json => setTracks(json.data))
    }, [])

    return {
        tracks,
        selectedTrackId,
        setSelectedTrackId,
    }
}