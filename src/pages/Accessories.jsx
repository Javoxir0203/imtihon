import Catego from '../components/Catego';
import Footer from '../components/Footer';
import Sort from '../components/Sort';

const Accessories = () => {
	return (
		<div>
			<div className='container mx-auto pt-[100px] px-12 w-[1400px]'>
				<div className='flex'>
					<Catego title='Accessories' />
					<Sort />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Accessories;
