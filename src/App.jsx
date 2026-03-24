import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import CharacterInfo from './pages/CharacterInfo';
import CharacterEpisodes from './pages/CharacterEpisodes';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetails />}>
            <Route index element={<Navigate to="info" replace />} />
            <Route path="info" element={<CharacterInfo />} />
            <Route path="episodes" element={<CharacterEpisodes />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;