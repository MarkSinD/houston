import React from 'react';
import './App.css';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {routes} from "./routes";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map(route =>
                        <Route
                            element={<route.component/>}
                            path={route.path}
                        />)}
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
