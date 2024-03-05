import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();
	const [registerData, setRegisterData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		createPassword: '',
		confirmPassword: '',
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

	const LoginSubmit = e => {
		e.preventDefault();
		console.log(loginData);
		const login = JSON.parse(localStorage.getItem('registerData'));
		if (login.email !== loginData.email) {
			alert('Invalid Email');
		} else if (login.confirmPassword !== loginData.password) {
			alert('Invalid password');
		} else {
			navigate('/login/accountInformation');
		}
	};
	return (
		<>
			<div className='w-[70%] mx-auto '>
				<h2 className='text-3xl mt-10 '>Hello there!</h2>
				<p className='text-xl  mt-5'>Please sign in or create account to continue</p>
				<div className='container grid md:grid-cols-2  mx-auto px-3'>
					<div>
						<h3 className='mt-6 text-2xl'>SIGN IN</h3>
						<form onSubmit={LoginSubmit} className='mt-6 w-[80%]'>
							<div className='mb-4'>
								<label>Email</label>
								<br />
								<input onChange={e => setLoginData({ ...loginData, email: e.target.value })} className='input border w-full py-3 px-5 outline-none border-gray-600 rounded-md' placeholder='Email Address' type='text' />
							</div>
							<div className='mt-4'>
								<label>Password</label>
								<br />
								<input onChange={e => setLoginData({ ...loginData, password: e.target.value })} className='input w-full py-3 px-5 border outline-none border-gray-600 rounded-md' placeholder='Password' type='text' />
							</div>
							<div className='flex items-center mt-4'>
								<input className='w-5 h-5 mr-2 rounded-full' type='checkbox' />
								<p className='text-sm text-gray-500'>Remember my details</p>
							</div>
							<button className=' w-full py-3 px-5 mt-4 bg-[#ED165F] text-white rounded-md'>SIGN IN</button>
							<p className='mt-4 text-gray-500 cursor-pointer'>Forgot password?</p>
						</form>
					</div>
					<div>
						<h3 className='mt-6 text-2xl'>CREATE ACCOUNT</h3>
						<form onSubmit={RegiterSubmit} className='mt-6 w-[80%]'>
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
								<label>Create Password</label>
								<br />
								<input value={registerData.createPassword} onChange={e => setRegisterData({ ...registerData, createPassword: e.target.value })} className='w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName' />
							</div>
							<div className='mt-4'>
								<label>Confirm Password</label>
								<br />
								<input value={registerData.confirmPassword} onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })} className=' w-full rounded-md border p-3 outline-none' type='text' name='' id='firstName' />
							</div>
							<div className='flex items-center mt-4'>
								<input className='w-5 h-5 mr-2' type='checkbox' />
								<p className='text-sm text-gray-500'>
									I want to receive Safari newsletters with the best <br /> deals and offers
								</p>
							</div>
							<button className=' mb-10 w-full px-5 py-3  mt-4 bg-[#ED165F] text-white rounded-md'>CREATE ACCOUNT</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LoginPage;
