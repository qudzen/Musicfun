import './App.css'
import {useEffect, useState} from "react";

// const tracks = [
//     {id: '1', isSelected: true, title: 'Musiccfun soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
//     {id: '2', isSelected: false, title: 'Musicfun', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
// ]

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
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))


    }, [])

    if (tracks === null)
        return (
            <div>
                <h1>Musicfun</h1>
                <span>Loading...</span>
            </div>
        )
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
                                    {track.attributes.title}
                                </div>
                                <audio controls src={track.attributes.attachments[0].url}></audio>
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
