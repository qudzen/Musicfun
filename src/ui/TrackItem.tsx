import type {T} from "../api/api.ts"

type Props = {
    isSelected: boolean,
    onSelect: (trackId: string) => void,
    track: T
}


function TrackItem({onSelect, track, isSelected}: Props){
    const handleClick = () => onSelect?.(track.id)
    return (
        <li key={track.id} style={{
            border: isSelected ? '1px solid red' : 'none'
        }}>
            <div onClick={ handleClick }>
                {track.attributes.title}
            </div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
export default TrackItem;