import React from 'react';
import './style.css';
import Characters from './pages/Сharacters';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/404';
import Menu from './components/Menu';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Menu />}>
          <Route path="" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
