// src/components/NavMenu.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/Images/Logo.png'

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
      <nav className="w-full h-[85px] hidden fixed z-[10] top-0 lg:flex items-center justify-between px-2 lg:px-[5%]">
        {/** logo */}
          <div>
            <Link to="/" className='flex items-center'>
              <img
                src={Logo}
                className=" w-auto h-[40px]  navbar-brand cursor-pointer"
                alt="logo"
              />
            </Link>
          </div>

        {/** menu items */}
        <div className="h-full">
          <ul className="w-full h-full flex justify-center items-center space-x-2 text-xs md:text-xs xl:text-base uppercase font-bold leading-19.36 text-[#F2F2F2]">
            {MenuItemData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[#f67d12] text border-b-2 cursor-pointer  py-4 px-3"
                      : "border-b-2 border-b-transparent cursor-pointer py-4 px-3 hover:border-b-[#f67d12]"
                  }
                  style={{ textDecoration: 'none' }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
    </nav>

  );
};

export default NavMenu;
