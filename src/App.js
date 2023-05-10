import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

function App() {
  return (
    <Router>
      <Navbar title="MovieWorld" />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
