import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from '../../themeContext/ThemeContext';
import Theme from '../themeChang/Theme';


const Header = () => {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
   
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <header className="py-4 px-6 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 shadow-md bg-white dark:bg-gray-800">
        {/* Logo on the left */}
        <div className="flex-none mb-4 md:mb-0">
          <h1 className={`${themeMode === 'dark'?'text-white':'text-black'} text-3xl font-extrabold`}>R-ecom</h1>
        </div>

        {/* Centered navigation links */}
        <nav className="flex-1 flex items-center justify-center mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-semibold ${themeMode === 'dark'?'text-white':'text-black'} ${isActive ? 'text-yellow-400' : ''} hover:text-yellow-500`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-semibold ${themeMode === 'dark'?'text-white':'text-black'} ${isActive ? 'text-yellow-400' : ''} hover:text-yellow-500`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `text-lg font-semibold ${themeMode === 'dark'?'text-white':'text-black'} ${isActive ? 'text-yellow-400' : ''} hover:text-yellow-500`
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Buttons on the right */}
    
        <div className="flex-none space-x-4">
          <NavLink to='login'>   
           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-lg">
            Login
          </button>
          </NavLink>
           <NavLink to='singup'>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-lg">
            Signup
          </button>
          </NavLink>
          <Theme />
         
        </div>
      </header>
    </ThemeProvider>
 
  );
};

export default Header;
