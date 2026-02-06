import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailOutputData} from "../api/api.ts";

export type Props = {
    trackId: string | null
}

export function useTrackDetail({trackId}: Props) {
    const [trackDetails, setTrackDetails] = useState<GetTrackDetailOutputData | null | 'loading'>(null)


    useEffect(() => {
        if (!trackId) {
            setTrackDetails(null)
            return;
        }
        const promise = getTrack(trackId)
        promise.then(json => setTrackDetails(json.data))
    }, [trackId])

    return {
        trackDetails,
    }
}

