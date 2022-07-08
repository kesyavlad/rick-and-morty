import React from 'react';
import './style.css';
import Characters from './pages/Сharacters';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/404';
import Menu from './components/Menu';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Menu />}>
          <Route path="home" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
