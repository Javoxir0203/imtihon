import React, { useState } from 'react';
import Footer from '../components/Footer';

const AccountInformation = () => {
	const [registerData, setRegisterData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		birth: '',
	});
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const RegiterSubmit = e => {
		e.preventDefault();
		console.log(registerData);
		if (registerData.confirmPassword !== registerData.createPassword) {
			alert('Password is incorrect');
		} else {
			localStorage.setItem('registerData', JSON.stringify(registerData));
			alert('Success You have registered');
			setRegisterData({
				firstName: '',
				lastName: '',
				email: '',
				createPassword: '',
				confirmPassword: '',
			});
		}
	};
	return (
		<>
			<div className=' container mx-auto mt-16  grid grid-cols-2 mb-10'>
				<div className='border w-96 '>
					<h2 className='text-xl font-bold mb-4 text-center mt-6'>ACCOUNT DASHBOARD</h2>
					<ul className='w-[70%] mx-auto mt-10'>
						<li className='flex items-center mb-2 '>
							<i className='fas w-6 h-6 mr-2 fa-user'></i>
							<span>Account Information</span>
						</li>
						<li className='flex items-center mb-2 '>
							<i className='fas w-6 h-6 mr-2 fa-address-book'></i>
							<span>Address Book</span>
						</li>
						<li className='flex items-center mb-2 '>
							<i className='fas w-6 h-6 mr-2 fa-gift'></i>
							<span>My Orders</span>
						</li>
						<li className='flex items-center mb-2 '>
							<i className='fas w-6 h-6 mr-2 fa-heart'></i>
							<span>My Favorites</span>
						</li>
						<li className='flex absolute bottom-0  items-center'>
							<i className='fas w-6 h-6 mr-2 fa-sign-out-alt'></i>
							<span>SIGN OUT</span>
						</li>
					</ul>
				</div>

				<div>
					<h2 className='text-2xl mb-4'>User Information</h2>
					<div className='border'>
						<form onSubmit={RegiterSubmit} className='mt-6 w-[50%] container mx-auto'>
							<div className='mb-4'>
								<label>First name</label>
								<br />
								<input value={registerData.firstName} onChange={e => setRegisterData({ ...registerData, firstName: e.target.value })} className='  w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName' />
							</div>
							<div className='mt-4'>
								<label>Last name</label>
								<br />
								<input value={registerData.lastName} onChange={e => setRegisterData({ ...registerData, lastName: e.target.value })} className=' w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName' />
							</div>
							<div className='mt-4'>
								<label>Email</label>
								<br />
								<input value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} className=' w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName' />
							</div>
							<div className='mt-4'>
								<label>Gender</label>
								<br />
								<select value={registerData.gender} onChange={e => setRegisterData({ ...registerData, gender: e.target.value })} className=' w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName'>
									<option value='Male'>Male</option>
									<option value='Famale'>Famale</option>
								</select>
							</div>
							<div className='mt-4'>
								<label>Date of birth</label>
								<br />
								<input type='date' name='brith' value={registerData.birth} onChange={e => setRegisterData({ ...registerData, birth: e.target.value })} className=' w-full rounded-md border p-3 outline-none' id='firstName' />
							</div>
							<div className='flex items-center mt-4 mb-10'>
								<input className='w-5 h-5 mr-2' type='checkbox' />
								<p className='text-sm text-gray-600 '>Newsletter subsciption</p>
							</div>
							<button className=' mb-10  w-full px-5 py-3  mt-4 bg-[#ED165F] text-white rounded-md'>save changes</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AccountInformation;
