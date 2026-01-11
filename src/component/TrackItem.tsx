export type T = {
    id: string,
    attributes: TrackListItemAttributes
}

type TrackListItemAttributes = {
    title: string,
    attachments: Array<{ url: string }>
}

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