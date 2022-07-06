import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/characters">Characters</Link>
      <div className="titleText">Rick and Morty</div>
      <Outlet />
    </div>
  );
};

export default Menu;
