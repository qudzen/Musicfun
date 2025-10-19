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
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [tracks, setTracks] = useState(null)

    useEffect( () => {
        console.log("qwe")
    }, [])

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
            <button onClick={ () => {
                setSelectedTrackId(null)
                setSelectedTrack(null)

            }}>

            </button>
            <div style={{ display: 'flex', gap: '40px'}}>
                <ul>
                    {
                        tracks.map((track) => {
                            return (
                                <li key={track.id} style={{border: track.id ===  selectedTrackId ? '1px solid red' : 'none'}}>
                                    <div onClick={ () => {
                                        setSelectedTrackId(track.id)
                                        setSelectedTrack('loading')

                                        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id, {
                                            headers: {
                                                'api-key': '0c079638-275a-452a-abdb-7031649819d6'
                                            }
                                        }).then(res => res.json())
                                            .then(json => setSelectedTrack(json.data))
                                    }}>
                                        {track.attributes.title}
                                    </div>
                                    <audio controls src={track.attributes.attachments[0].url}></audio>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <h2>Details</h2>
                    {selectedTrack === null
                        ? 'track is not selected'
                        : selectedTrack === 'loading'
                        ? 'loading...'
                        : <div>
                            <h3> {selectedTrack.attributes.title} </h3>
                            <h4>Lyrics</h4>
                            <p> {selectedTrack.attributes.lyrics ?? 'no lyrics'} </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default App
