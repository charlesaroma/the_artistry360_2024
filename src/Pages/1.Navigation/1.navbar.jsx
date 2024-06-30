// src/components/NavMenu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItemData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Classes",
    path: "/classes",
  },
  {
    title: "Profiles",
    path: "/profile",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const NavMenu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg z-50">
      <ul className="flex items-center justify-center space-x-4 list-none">
        {MenuItemData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
              style={{ textDecoration: 'none' }}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
