import arrow from '../images/arrow-up.svg';
import { Link } from 'react-scroll';
import Silder from './Silder';

const Hero = () => {
	return (
		<div className='bg-[#ED165F] hero pb-5'>
			<div className='flex justify-center'>
				<Silder />
			</div>
			<div className='flex justify-center pt-10'>
				<div className='flex-col space-y-4 justify-center'>
					<h2>
						<p className='text-white text-3xl'>Explore our collection</p>
					</h2>
					<Link to='shop' duration={1000}>
						<img className='ml-[120px] ' src={arrow} alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
