
import Categor from '../components/Categor';
import Footer from '../components/Footer';
import Sort from '../components/Sort';

const Shoes = () => {
	return (
		<div>
			<h2 className='text-2xl container mx-auto  mt-10'></h2>
			<div className='container px-12 mx-auto pt-[0px] w-[1400px]'>
				<div className='flex'>
					<Categor title='Shoes' />
					<Sort />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Shoes;
