import PageName from "./PageName.tsx";
import TrackList from "./TrackList.tsx";
import TrackDetail from "./TrackDetail.tsx";
import {useState} from "react";

function MainContent() {
    const [trackId, setTrackId] = useState< null | string >(null);
    const handleTrackSelected = (id: null | string) => {setTrackId(id)}
    return <div>
        <PageName />
        <div style = {{display: "flex"}}>
            <TrackList onTrackSelected = { handleTrackSelected } />
            <TrackDetail trackId={trackId}/>
        </div>
    </div>

}
export default MainContent