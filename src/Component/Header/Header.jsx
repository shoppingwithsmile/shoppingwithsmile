import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Header/Header.scss";

const Header = () => {
    const location = useLocation();

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    // Function to close the navbar
    const closeNavbar = () => {
        setIsActive(false);
    };

    return (
        <div className='header-wrapper'>
            <div className='container'>
                <nav>
                    <Link className="navbar_brand" to="/"> Secret Item  </Link>
                    <ul className={`nav-list ${isActive ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/womens' ? 'active' : ''}`}
                                to="/womens"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Womens
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/mens' ? 'active' : ''}`}
                                to="/mens"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Mens
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/kids' ? 'active' : ''}`}
                                to="/kids"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Baby & Kids
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/ai' ? 'active' : ''}`}
                                to="/ai"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                AI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/gadgets' ? 'active' : ''}`}
                                to="/gadgets"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Gadgets & Tools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/homeandkitchen' ? 'active' : ''}`}
                                to="/homeandkitchen"
                                onClick={closeNavbar} // Close the navbar when the link is clicked
                            >
                                Home & Kitchen
                            </Link>
                        </li>
                    </ul>
                    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
