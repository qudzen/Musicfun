import './App.css'
import {useState} from "react";

const tracks = [
    {id: '1', isSelected: true, title: 'Musiccfun soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '2', isSelected: false, title: 'Musicfun', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
]

// const newLiReactElements = tracks.map((track) => {
//     return (
//         <li key={track.id} style = { {border: track.isSelected ? '1px solid red' : 'none'} }>
//             <div>
//                 {track.title}
//             </div>
//             <audio controls src={track.url}></audio>
//         </li>)
// })


function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)

    if (tracks.length === 0){
        return (
            <div>
                <h1>Musicfun</h1>
                <span>No tracks</span>
            </div>
        )
    }
  return (
    <>
        <div>
            <h1>Musicfun player</h1>
            <ul>
                {
                    tracks.map((track) => {
                        return (
                            <li key={track.id} style={{border: track.id ===  selectedTrackId ? '1px solid red' : 'none'}}>
                                <div onClick={ () => {
                                    setSelectedTrackId(track.id)
                                }}>
                                    {track.title}
                                </div>
                                <audio controls src={track.url}></audio>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default App
