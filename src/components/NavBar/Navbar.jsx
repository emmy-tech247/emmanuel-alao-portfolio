import React, { useState } from 'react';
import './Navbar.css';

import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleContact = () => {
        const contactSection = document.getElementById('contact');

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        closeMenu();
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <img
                src={logo}
                alt="Emmanuel Alao Logo"
                className="logo"
            />

            {/* Desktop Navigation */}
            <div className="desktopMenu">

                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Home
                </Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    About
                </Link>

                <Link
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Portfolio
                </Link>

              
            </div>

            {/* Desktop Actions */}
            <div className="desktopActions">

                {/* Download CV */}
                <a
                    href="/Emmanuel-Alao-CV.pdf"
                    download="Emmanuel-Alao-CV.pdf"
                    className="cvBtn"
                >
                    Download CV
                </a>

                {/* Contact Me */}
                <button
                    className="desktopMenuBtn"
                    onClick={handleContact}
                >
                    <img
                        src={contactImg}
                        alt=""
                        className="desktopMenuImg"
                    />

                    Contact Me
                </button>

            </div>

            {/* Mobile Menu Button */}
            <img
                src={menu}
                alt="Menu"
                className="mobMenu"
                onClick={() => setShowMenu(!showMenu)}
            />

            {/* Mobile Navigation */}
            <div
                className="navMenu"
                style={{
                    display: showMenu ? 'flex' : 'none'
                }}
            >

                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={closeMenu}
                >
                    Home
                </Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={closeMenu}
                >
                    About
                </Link>

                <Link
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={closeMenu}
                >
                    Portfolio
                </Link>

              

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={closeMenu}
                >
                    Contact
                </Link>

                {/* Mobile Download CV */}
                <a
                    href="/Emmanuel-Alao-CV.pdf"
                    download="Emmanuel-Alao-CV.pdf"
                    className="listItem cvDownload"
                    onClick={closeMenu}
                >
                    Download CV
                </a>

            </div>

        </nav>
    );
};

export default Navbar;