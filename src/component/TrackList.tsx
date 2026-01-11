import {useEffect, useState} from "react";
import './TrackDetail.tsx'
import TrackItem from "./TrackItem.tsx";
import type {T} from "./TrackItem.tsx"

type Props = {
    onTrackSelected: (id: string | null) => void,
}

function TrackList({onTrackSelected}: Props){
    const [tracks, setTracks] = useState< Array<T> | null >(null)
    const [selectedTrackId, setSelectedTrackId] = useState< string | null >(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))
    }, [])



    if (tracks === null) {
        return (
            <div>
                <h1>Musicfun</h1>
                <span>Loading...</span>
            </div>
        )
    }
    if (tracks.length === 0){
        return (
            <div>
                <h1>Musicfun</h1>
                <span>No tracks</span>
            </div>
        )
    }

    const resetButton = () => {
        setSelectedTrackId(null)
        onTrackSelected?.(null)
    }

    const handleClick = (trackId: string) => {
        setSelectedTrackId(trackId)
        onTrackSelected?.(trackId)
    }

    return(
        <div>
            <button onClick={resetButton}>reset</button>
            <ul>
                {
                    tracks.map((track) => {



                        return (
                            <TrackItem key={track.id} track={track} isSelected={track.id ===  selectedTrackId} onSelect={handleClick} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TrackList