import React, { useState } from 'react';
import Modal from 'react-modal';
import './QuoteModal.css';

Modal.setAppElement('#root');

const QuoteModal = ({ isOpen, onRequestClose }) => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		projectType: '',
		details: '',
		squareFootage: '',
		location: '',
		name: '',
		email: '',
		phone: '',
	});

	const resetModal = () => {
		setStep(1);
		setFormData({
			projectType: '',
			squareFootage: '',
			details: '',
			location: '',
			name: '',
			email: '',
			phone: '',
		});
	};

	const handleClose = () => {
		resetModal();
		onRequestClose();
	};

	const handleNextStep = () => {
		setStep(step + 1);
	};

	const handlePrevStep = () => {
		setStep(step - 1);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleProjectTypeSelection = (value) => {
		setFormData({ ...formData, projectType: value });
		handleNextStep();
	};

	const handleSquareFootageSelection = (value) => {
		setFormData({ ...formData, squareFootage: value });
		handleNextStep();
	};

	const handleSubmit = () => {
		console.log(formData);
		handleClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			contentLabel='Get a Free Quote'
			className='quote-modal'
			overlayClassName='quote-modal-overlay'>
			<button className='close-button' onClick={handleClose}>
				x
			</button>
			<h2>Get Your Free Quote</h2>
			{step === 1 && (
				<div className='modal-step'>
					<p>Select the type of project:</p>
					{/* <select
						name='projectType'
						value={formData.projectType}
						onChange={handleInputChange}>
						<option value=''>Select....</option>
						<option value='bathroom'>Bathroom</option>
						<option value='basement'>Basement</option>
						<option value='bedroom'>Bedroom</option>
						<option value='kitchen'>Kitchen</option>
						<option value='other'>Other</option>
					</select> */}
					<div className='square-footage-options'>
						<button onClick={() => handleProjectTypeSelection('bathroom')}>
							Bathroom
						</button>
						<button onClick={() => handleProjectTypeSelection('kitchen')}>
							Kitchen
						</button>
						<button onClick={() => handleProjectTypeSelection('basement')}>
							Basement
						</button>
						<button onClick={() => handleProjectTypeSelection('bedroom')}>
							Bedroom
						</button>
						<button onClick={() => handleProjectTypeSelection('other')}>
							Other
						</button>
					</div>
				</div>
			)}
			{step === 2 && (
				<div className='modal-step'>
					<p>Select approximate square footage:</p>
					<div className='square-footage-options'>
						<button onClick={() => handleSquareFootageSelection('100-250')}>
							100-250 sq ft
						</button>
						<button onClick={() => handleSquareFootageSelection('250-500')}>
							250-500 sq ft
						</button>
						<button onClick={() => handleSquareFootageSelection('500-750')}>
							500-750 sq ft
						</button>
						<button onClick={() => handleSquareFootageSelection('750+')}>
							750+ sq ft
						</button>
					</div>
				</div>
			)}
			{step === 3 && (
				<div className='modal-step'>
					<p>
						Provide some brief details of the job (drywall, paint, tile, full
						reno, etc...):
					</p>
					<input
						type='text'
						name='details'
						value={formData.details}
						onChange={handleInputChange}
						placeholder='Project details'
					/>
				</div>
			)}
			{step === 4 && (
				<div className='modal-step'>
					<p>
						Where is the project located? (Kanata, Stittsville, Barrhaven,
						Orleans, etc...)
					</p>
					<input
						type='text'
						name='location'
						value={formData.location}
						onChange={handleInputChange}
						placeholder='Enter area'
					/>
				</div>
			)}
			{step === 5 && (
				<div className='modal-step'>
					<p>
						To receive your free quote, please enter your contact information:
					</p>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						placeholder='Your Name'
					/>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						placeholder='Your Email'
					/>
					<input
						type='tel'
						name='phone'
						value={formData.phone}
						onChange={handleInputChange}
						placeholder='Your Phone Number'
					/>
				</div>
			)}
			<div className='modal-buttons'>
				{step > 1 && <button onClick={handlePrevStep}>Previous</button>}
				{step > 2 && step < 5 && <button onClick={handleNextStep}>Next</button>}
				{step === 5 && <button onClick={handleSubmit}>Get Quote</button>}
			</div>
		</Modal>
	);
};

export default QuoteModal;
