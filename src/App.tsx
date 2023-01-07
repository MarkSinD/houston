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
    Navigate,
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<LobbyPage/>} />
                    <Route path='/game' element={<GamePage/>} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
