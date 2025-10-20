import {useEffect, useState} from "react";
import './TrackDetail.tsx'
import TrackDetail from "./TrackDetail.tsx";

function TrackList(){
    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [tracks, setTracks] = useState(null)


    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))


    }, [])

    if (tracks === null){
        return (
            <div>
                <h1>Musicfun</h1>
                <span>Loading...</span>
            </div>
        )}
    if (tracks.length === 0){
        return (
            <div>
                <h1>Musicfun</h1>
                <span>No tracks</span>
            </div>
        )}

        return (
            <>
                <ul>
                    {
                        tracks.map((track) => {
                            return (
                                <li key={track.id} style={{border: track.id ===  selectedTrackId ? '1px solid red' : 'none'}}>
                                    <div onClick={ () => {
                                        setSelectedTrackId(track.id)
                                        setSelectedTrack('loading')

                                        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id, {
                                            headers: {
                                                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
                                            }
                                        }).then(res => res.json())
                                            .then(json => setSelectedTrack(json.data))
                                    }}>
                                        {track.attributes.title}
                                    </div>
                                    <audio controls src={track.attributes.attachments[0].url}></audio>
                                </li>
                            )
                        })
                    }
                </ul>
                <TrackDetail />
            </>
        )
}
export default TrackList