import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuOpener from './components/NavBar/MenuOpener';
import Navbar from './components/NavBar/Navbar';
import RouterConfig from './navigation/RouterConfig';

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const skipPaths = ['/login', '/signup'];

  const shouldSkip = skipPaths.includes(location.pathname);

  return (
    <div>
      {!shouldSkip && (
        <>
          <MenuOpener open={open} toggleMenu={toggleMenu} />
          <Navbar open={open} />
        </>
      )}
      {/* {/* { (location.pathname !== '/' && location.pathname !== '/sign_up')
        && (
        <>
          <MenuOpener open={open} toggleMenu={toggleMenu} />
          <Navbar open={open} />
        </>
        )} */}
      <RouterConfig />
    </div>
  );
}

export default App;
