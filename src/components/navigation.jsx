import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const targetRef = useRef(null);

  const home = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [targetRef]);

  return (
    <header ref={targetRef}>
      <h2 className="logo" onClick={home}>
        S.
      </h2>
      <button
        className={`sidebar__hamburger ${navOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        aria-label="Menu"
      >
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bottom"></span>
      </button>

      <nav className={`sidebar ${navOpen && 'sidebar__open'}`}>
          <ul>
            <li className="sidebar__li">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="sidebar__li">
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </li>
            <li className="sidebar__li">
              <Link to="/projects" onClick={toggleSidebar}>Portfolio</Link>
            </li>
            <li className="sidebar__li">
              <Link to="/resume" onClick={toggleSidebar}>Resume</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navigation;
