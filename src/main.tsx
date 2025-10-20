import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TrackList from "./component/TrackList.tsx";
import TrackDetail from "./component/TrackDetail.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainContent />
  </StrictMode>,
)

function MainContent() {
    <Header />
    <TrackList />
    <TrackDetail />
    <Footer />
}
export default MainContent