import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load each section
const Home = lazy(() => import('./pages/Home/Home'));
const Organizer = lazy(() => import('./pages/Organizer'));
const Event = lazy(() => import('./pages/Event'));
const Admin = lazy(() => import('./pages/Admin'));
//const Designer = lazy(() => import('./pages/Designer'));
const User = lazy(() => import('./pages/User'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/organizer/*" element={<Organizer />} />
                    <Route path="/event/*" element={<Event />} />
                    <Route path="/admin/*" element={<Admin />} />
                    {/*
                    <Route path="/designer/*" element={<Designer />} />
                    */ }
                    <Route path="/user/*" element={<User />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;