import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MenuItems = (props) => {
    const { parentMenu } = props;
    const location = useLocation();

    return (
        <>
            <li className="current-menu-item menu-item-has-children">
                <Link className={parentMenu === 'home' ? 'menu-item-has-children active' : 'menu-item-has-children'} to="/#">Home</Link>
                <ul className="sub-menu-list">
                    <li><Link className={location.pathname === '/' ? 'active' : ''} to="/#">Home One</Link></li>
                    <li><Link className={location.pathname === '/home2' ? 'active' : ''} to="/home2#">Home Two</Link></li>
                    <li><Link className={location.pathname === '/home3' ? 'active' : ''} to="/home3#">Home Three</Link></li>
                </ul>
            </li>
            <li>
                <Link className={location.pathname === '/about' ? 'active' : ''} to="/about#">About Us</Link>
            </li>
            <li className="menu-item-has-children">
                <Link className={parentMenu === 'pages' ? 'menu-item-has-children active' : 'menu-item-has-children'} to="#">Pages</Link>
                <ul className="sub-menu-list">
                    <li><Link className={location.pathname === '/services' ? 'active' : ''} to="/services#">Service</Link></li>
                    <li><Link className={location.pathname === '/price' ? 'active' : ''} to="/price#">Price</Link></li>
                    <li><Link className={location.pathname === '/team' ? 'active' : ''} to="/team#">Team</Link></li>
                    <li><Link className={location.pathname === '/team-details' ? 'active' : ''} to="/team-details#">Team Details</Link></li>
                    <li><Link className={location.pathname === '/faq' ? 'active' : ''} to="/faq#">Faq</Link></li>
                    <li><Link className={location.pathname === '/login' ? 'active' : ''} to="/login#">Login</Link></li>
                    <li><Link className={location.pathname === '/signup' ? 'active' : ''} to="/signup#">Sign Up</Link></li>
                    <li><Link className={location.pathname === '/error' ? 'active' : ''} to="/error#">404 Error</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link className={parentMenu === 'blog' ? 'menu-item-has-children active' : 'menu-item-has-children'} to="/blog#">Blog</Link>
                <ul className="sub-menu-list">
                    <li><Link className={location.pathname === '/blog' ? 'active' : ''} to="/blog#">Blog</Link></li>
                    <li><Link className={location.pathname === '/blog-details' ? 'active' : ''} to="/blog-details#">Blog Details</Link></li>
                </ul>
            </li>
            <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact#">Contact</Link></li>
        </>
    );
}

export default MenuItems;