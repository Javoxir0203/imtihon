import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Facebook from '../assets/images/Facebook.svg';
import Twitter from '../assets/images/Twitter.svg';
import istgram from '../assets/images/istgram.svg';

const Footer = () => {
	return (
		<footer className='bg-[#F5F5F5]'>
			<div className='flex justify-evenly items-center w-[1400px] container mx-auto h-[200px]'>
				<Link>
					<img src={logo} alt='logo' />
				</Link>
				<ul>
					<li className='hover:text-red-500'>About Us</li>
					<li className='hover:text-red-500'>Contact</li>
					<li className='hover:text-red-500'>Terms & Conditions</li>
				</ul>
				<div className='flex flex-col  gap-2 '>
					<Link className=' flex gap-2'>
						<img src={Facebook} alt='facebook' />
						<span>Facebook</span>
					</Link>

					<Link className=' flex gap-2 '>
						<img src={Twitter} alt='twitter' />
						<span>Twitter</span>
					</Link>
					<Link className=' flex gap-2'>
						<img src={istgram} alt='instagram' />
						<span>Instagram</span>
					</Link>
				</div>
				<div>
					<p className='mb-3'>Subscribe to our newsletter</p>
					<input className='input border px-6 py-2 outline-none border-red-600 rounded-l-md' placeholder='Email Address' type='text' />
					<button className='bg-red-600 p-[9px] text-white rounded-r-md'>OK</button>
				</div>
				<div>
					<Link className='block hover:text-red-500'>497 Evergreen Rd Rosvilli CA 95673</Link>
					<Link className='block hover:text-red-500'>44 345 678 903</Link>
					<Link className='block hover:text-red-500'>adobexd@gmail.com</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
