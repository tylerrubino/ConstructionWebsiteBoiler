import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';
import Navbar from './components/Navbar';
import QuoteModal from './components/QuoteModal';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className='App'>
			<Navbar setIsModalOpen={setIsModalOpen} />
			<QuoteModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
			/>
			<section id='hero' className='hero-section'>
				<div className='hero-content'>
					<p className='hero-tagline'>Chico Construction</p>
					<h1>
						Transform Your Home Into Your{' '}
						<span className='gradient-text'>DREAM</span> Home
					</h1>
					<p>
						We deliver high-quality services with a commitment to excellence.
					</p>
					<button
						className='hero-button'
						onClick={() => {
							setIsModalOpen(true);
						}}>
						Get Free Quote
					</button>
				</div>
			</section>
			<section id='about' className='section'>
				<h2>About Us</h2>
				<p>This is the about section</p>
			</section>
			<section id='testimonials' className='section'>
				<h2>Testimonials</h2>
				<p>This is the testimonials section</p>
			</section>
			<section id='contact' className='section'>
				<h2>Contact Us</h2>
				<p>This is the contact section</p>
			</section>
		</div>
	);
}

export default App;
