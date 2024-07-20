import {
    BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home.html" />} />
                <Route path="/home.html" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;