import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Followers from './pages/Followers';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '70px' }}> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/followers" element={<Followers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
