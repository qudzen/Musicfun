import PageName from "./PageName.tsx";
import TrackList from "./TrackList.tsx";
import TrackDetail from "./TrackDetail.tsx";
import {useMainContent} from "../bll/useMainContent.tsx";



function MainContent() {
   const { trackId, setTrackId } = useMainContent()
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