import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Memoria from './components/Memoria';
import Servicio from './components/Servicio';


function App() {
  return (
    <Router>
      < Sidebar />
      < Home path='/src/components/Home.js' pages={Home} />
      < Bio path='/src/components/Bio' pages={Bio} />
      < Memoria YoutubeEmbed embedId="pprxZcJZDbM" />
      < Servicio path='/src/components/Servivio' pages={Servicio} />
    </Router>
  )
}

export default App;
