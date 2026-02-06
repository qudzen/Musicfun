import './TrackDetail.tsx'
import TrackItem from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
type Props = {
    onTrackSelected: (id: string | null) => void,
}

function TrackList({onTrackSelected}: Props){
    const {tracks, selectedTrackId, setSelectedTrackId} = useTracks()


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