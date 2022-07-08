import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

const Menu = () => {
  return (
    <>
      <div className="titleText">Rick and Morty</div>
      <div className="sizeMenu">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'styleButtonMenuOn' : 'styleButtonMenuOff')}>
          Home
        </NavLink>
        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? 'styleButtonMenuOn' : 'styleButtonMenuOff')}>
          Characters
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
