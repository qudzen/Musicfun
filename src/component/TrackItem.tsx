
function TrackItem(props){
    return (
        <li key={props.track.id} style={{
            border: props.isSelected ? '1px solid red' : 'none'
        }}>
            <div onClick={ props.handleClick }>
                {props.track.attributes.title}
            </div>
            <audio controls src={props.track.attributes.attachments[0].url}></audio>
        </li>
    )
}
export default TrackItem;