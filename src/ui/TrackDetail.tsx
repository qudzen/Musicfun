import './TrackList.tsx'
import {useTrackDetail} from "../bll/useTrackDetail.tsx";
import {type Props} from '../bll/useTrackDetail.tsx'
import styles from './track-detail.module.css'



function TrackDetail(trackId: Props) {
    const {trackDetails} = useTrackDetail(trackId)
    return (
        <div className={styles.track}>
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