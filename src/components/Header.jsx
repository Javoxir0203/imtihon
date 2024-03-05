import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import user from '../assets/images/user.svg';
import bag from '../assets/images/bag.svg';
import healt from '../assets/images/healt.svg';

const Header = () => {
	return (
		<header className='bg-[#f5f5f5]'>
			<div className='md:flex  justify-evenly items-center py-[15px]  '>
				<ul className='md:flex space-x-14'>
					<li>
						<NavLink to={'/'}>Home</NavLink>
					</li>
					<li>
						<NavLink to={'/Clothes'}>Clothes</NavLink>
					</li>
					<li>
						<NavLink to={'/Shoes'}>Shoes</NavLink>
					</li>
					<li>
						<NavLink to={'/Accessories'}>Accessories</NavLink>
					</li>
				</ul>
				
					<img src={logo} alt='' />

				<div className='flex justify-between w-[30%]'>
					<input className='pl-3 bg-transparent outline-none border-b-[1px] border-solid border-[#00000079]' type='text' placeholder='Search...' />
					<button>
						<img src={search} alt='' />
					</button>
					<button>
						<Link to='login'>
							<img src={user} alt='' />
						</Link>
					</button>
					<button>
						<Link to='cart'>
							<img src={bag} alt='' />
						</Link>
					</button>
					<button>
						<img src={healt} alt='' />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
