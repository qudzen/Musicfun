import './TrackList.tsx'
import {useTrackDetail} from "../bll/useTrackDetail.tsx";
import {type Props} from '../bll/useTrackDetail.tsx'



function TrackDetail(trackId: Props) {
    const {trackDetails} = useTrackDetail(trackId)
    return (
        <div>
            <h2>Details</h2>
            {trackDetails === null
                ? 'track is not selected'
                : trackDetails === 'loading'
                    ? 'loading...'
                    : <div>
                        <h3> {trackDetails.attributes.title} </h3>
                        <h4>Lyrics</h4>
                        <p> {trackDetails.attributes.lyrics ?? 'no lyrics'} </p>
                    </div>
            }
        </div>
    )
}
export default TrackDetail;