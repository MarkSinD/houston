import React from 'react';
import './App.css';
import LobbyPage from "./layouts/LobbyPage";
import GamePage from "./layouts/GamePage";
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path='/' element={<LobbyPage/>} />
              <Route path='/game' element={<GamePage/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
