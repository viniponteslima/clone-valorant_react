import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from './components/pages/Home';
import SocialBar from './components/layout/SocialBar';
import Economy from './components/layout/Economy';
import ConfigButton from './components/layout/ConfigButton';
import Chat from './components/layout/Chat';
import TurnHorizontal from './components/layout/TurnHorizontal';
import Page from './components/Page';
import { useEffect, useState } from 'react';

// Videos
import BackgroundVideo from './components/layout/BackgroundVideo';
import defaultVideo from './videos/Contract Glitches.webm';
import homeVideo from './videos/EP9A2_902_Homescreen.mp4';


export default function App() {

  const [backgroundVideo, setBackgroundVideo] = useState(homeVideo);
  
  useEffect(() => {
    const handleContextMenu = event => event.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);



  
  return (
    <>
    <Router>
      <Economy />
      <ConfigButton />
      <SocialBar />

      <Page>
        <BackgroundVideo src={backgroundVideo} />
        <Routes>
          <Route exact path="/" element={<Home /> } />
        </Routes>
      </Page>
      
      <Chat />
      
    </Router>
    <TurnHorizontal />
    <span style={{position: 'fixed', width:'100%', color: 'red', bottom: 0, textAlign:'center'}}>
      {'Not responsive at the moment, only support for 780p or higher.'}
    </span>
    </>
  );
}