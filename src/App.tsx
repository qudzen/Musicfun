import './App.css'

const tracks = [
    {title: 'Musiccfun soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {title: 'Musicfun', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
]

const newLiReactElements = tracks.map((track) => {
    return (
        <li>
            <div>
                {track.title}
            </div>
            <audio controls src={tracks[0].url}></audio>
        </li>)
})


function App() {

  return (
    <>
        <div>
            <h1>Musicfun player</h1>
            <ul>
                {newLiReactElements}
            </ul>
        </div>
    </>
  )
}

export default App
