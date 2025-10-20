
function Header() {
    return (
        <div>
            <h1>Musicfun player</h1>
            <button onClick={ () => {
            setSelectedTrackId(null)
            setSelectedTrack(null)

            }}>

            </button>
        </div>
    )
}
export default Header;