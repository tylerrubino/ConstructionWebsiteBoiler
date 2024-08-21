import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/chico-logo.png';
import QuoteModal from './QuoteModal';

const Navbar = ({ setIsModalOpen }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className='navbar'>
				<div className='logo'>
					<img src={logo} alt='' className='logo-image' />
					<h1 className='company-name'>Chico Construction</h1>
				</div>
				<div className='hamburger' onClick={toggleMenu}>
					&#9776;
				</div>
				<ul className={`nav-links ${isOpen ? 'active' : ''}`}>
					<li>
						<Link to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to='testimonials' smooth={true} duration={500}>
							Testimonials
						</Link>
					</li>
					<li>
						<Link to='contact' smooth={true} duration={500}>
							Contact Us
						</Link>
					</li>
					<li className='quote-button' onClick={() => setIsModalOpen(true)}>
						Free Quote
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
