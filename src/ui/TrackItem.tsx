import type {T} from "../api/api.ts"
import styles from './tracks.module.css'
import clsx from "clsx";

type Props = {
    isSelected: boolean,
    onSelect: (trackId: string) => void,
    track: T
}


function TrackItem({onSelect, track, isSelected}: Props){
    const handleClick = () => onSelect?.(track.id)

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })

    return (
        <li className={className} key={track.id}>
            <div onClick={ handleClick }>
                {track.attributes.title}
            </div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
export default TrackItem;