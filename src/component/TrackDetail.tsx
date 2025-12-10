import {useEffect, useState} from "react";
import './TrackList.tsx'


function TrackDetail({trackId}) {

    const [selectedTrack, setSelectedTrack] = useState(null)


    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null)
            return;
        }
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data))
    }, [trackId])


    return (
        <div>
            <h2>Details</h2>
            {selectedTrack === null
                ? 'track is not selected'
                : selectedTrack === 'loading'
                    ? 'loading...'
                    : <div>
                        <h3> {selectedTrack.attributes.title} </h3>
                        <h4>Lyrics</h4>
                        <p> {selectedTrack.attributes.lyrics ?? 'no lyrics'} </p>
                    </div>
            }
        </div>
    )
}
export default TrackDetail;