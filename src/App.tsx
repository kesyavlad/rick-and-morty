import React from 'react';
import './style.css';
import Index from './pages/Сharacters';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Planets from './pages/Planets';
import Error from './pages/404';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="characters" element={<Index />} />
          <Route path="planets" element={<Planets />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
