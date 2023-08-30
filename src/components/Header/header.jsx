import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  return (
    <header className='h-24 px-7 shadow-lg flex justify-between items-center'>
      <div className="flex items-center gap-4 text-base ">
        <img className='h-14 w-14' src={logo} alt="logo" />
        <NavLink to="/">
          Wealth <br /> Health
        </NavLink>
      </div>

      <div className="flex flex-col gap-3">
        <p className='text-sm'>Employee:</p>
        <ul className='flex gap-4 text-sm'>
          <li>
            <NavLink
              to="/add"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              View
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
