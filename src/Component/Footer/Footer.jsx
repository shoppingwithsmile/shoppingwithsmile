import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const location = useLocation();

    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <div className=''>
                <footer class="footer py-5">
                    <div class="container d-sm-flex justify-content-between align-items-baseline">
                        <div>
                            <h4 className='mb-3 footer_sub_title'> PRODUCT </h4>
                            <ul className='list-unstyled'>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                        to="/"

                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/womens' ? 'active' : ''}`}
                                        to="/womens"

                                    >
                                        Womens
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/mens' ? 'active' : ''}`}
                                        to="/mens"

                                    >
                                        Mens
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/kids' ? 'active' : ''}`}
                                        to="/kids"

                                    >
                                        Baby & Kids
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/ai' ? 'active' : ''}`}
                                        to="/ai"

                                    >
                                        AI
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/gadgets' ? 'active' : ''}`}
                                        to="/gadgets"

                                    >
                                        Gadgets & Tools
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/homeandkitchen' ? 'active' : ''}`}
                                        to="/homeandkitchen"

                                    >
                                        Home & Kitchen
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-5">
                            <h4 className='mb-3 footer_sub_title'> COMPANY </h4>
                            <ul className='list-unstyled'>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/contactus' ? 'active' : ''}`}
                                        to="/contactus"

                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`}
                                        to="/privacy"

                                    >
                                        Privacy
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/termsandcondition' ? 'active' : ''}`}
                                        to="/termsandcondition"

                                    >
                                        Terms & Condition
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${location.pathname === '/aboutus' ? 'active' : ''}`}
                                        to="/aboutus"

                                    >
                                        About Us
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h4 className='mb-3 footer_sub_title'> FOLLOW US
                            </h4>

                            {/* <Link to="" className='me-2'>  <FontAwesomeIcon icon={faFacebookSquare} size='2xl' style={{ color: 'white' }}/></Link> */}
                            <Link to="https://www.instagram.com/your_saving_destination" target='_blank'> <FontAwesomeIcon icon={faInstagramSquare} size='2xl' style={{ color: 'white' }} /></Link>
                        </div>

                    </div>
                        <p className='text-center mt-2'> © Secret Item. All Rights Reserved. </p>
                </footer>
            </div>
        </div>
    )
}

export default Footer