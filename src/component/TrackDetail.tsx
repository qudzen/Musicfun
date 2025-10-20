import {useState} from "react";
import './TrackList.tsx'


function TrackDetail({selectedTrack} : TrackDetailProps) {



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