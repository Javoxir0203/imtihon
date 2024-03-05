import shoes from '../assets/images/shoes.svg';
import drees from '../assets/images/drees.svg';
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Footer from '../components/Footer';

const Cart = () => {
	return (
		<>
			<div className='container mx-auto ml-[120px] '>
				<h2 className='text-2xl mt-10'>Shopping Cart (2 items)</h2>
				<div className='grid grid-cols-5 mt-20 mb-5'>
					<h2 className='text-gray-400'>ITEM DESCRIPTION</h2>
					<h2></h2>
					<h2 className='pl-16 text-gray-400'>QUANTITY</h2>
					<h2 className='pl-16 text-gray-400'>UNIT PRICE</h2>
					<h2 className='pl-16 text-gray-400'>SUB TOTAL</h2>
				</div>
				<div className='grid grid-cols-5 gap-4 border border-gray-200 rounded-md p-4'>
					<div className='flex items-center gap-4 col-span-2'>
						<img src={drees} alt='shoes' className='w-24 rounded-md shadow-md' />
						<div>
							<h3 className='text-lg font-semibold text-gray-800'>Casual Flat Loafers</h3>
							<p className='text-sm text-gray-600'>Size - EU: 36 US: 5.5</p>
							<div className='flex gap-2 mt-2'>
								<button className='flex items-center gap-1 text-blue-500 hover:text-blue-700'>
									<FavoriteBorderIcon className='w-5 h-5' />
									<span>MOVE TO FAVORITES</span>
								</button>
								<button className='flex items-center gap-1 text-red-500 hover:text-red-700'>
									<CancelIcon className='w-5 h-5' />
									<span>REMOVE</span>
								</button>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<input type='number' placeholder='1' className='w-20 h-8 text-center border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-400' />
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<h2 className='text-lg font-semibold text-gray-800'>₦10,000</h2>
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<h2 className='text-lg font-semibold text-gray-800'>₦10,000</h2>
					</div>
				</div>
				<div className='grid grid-cols-5 gap-4 border border-gray-200  mt-8 rounded-md p-4'>
					<div className='flex items-center gap-4 col-span-2'>
						<img src={shoes} alt='shoes' className='w-24 rounded-md shadow-md' />
						<div>
							<h3 className='text-lg font-semibold text-gray-800'>Multicolored armless top</h3>
							<p className='text-sm text-gray-600'>Size - XS</p>
							<div className='flex gap-2 mt-2'>
								<button className='flex items-center gap-1 text-blue-500 hover:text-blue-700'>
									<FavoriteBorderIcon className='w-5 h-5' />
									<span>MOVE TO FAVORITES</span>
								</button>
								<button className='flex items-center gap-1 text-red-500 hover:text-red-700'>
									<CancelIcon className='w-5 h-5' />
									<span>REMOVE</span>
								</button>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<input type='number' placeholder='1' className='w-20 h-8 text-center border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-400' />
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<h2 className='text-lg font-semibold text-gray-800'>₦10,000</h2>
					</div>
					<div className='flex items-center justify-center col-span-1 border-1 border-l border-r '>
						<h2 className='text-lg font-semibold text-gray-800'>₦10,000</h2>
					</div>
				</div>
				<div className='flex justify-end mb-20'>
					<div>
						<h2 className='flex text-xl justify-end mt-16 gap-3 mb-10'>
							TOTAL: <span>₦ 20,000</span>
						</h2>
						<h2 className='flex justify-end rounded  mb-6'>Delivery fee not included yet</h2>
						<div className='flex justify-end gap-10'>
							<button className='border  px-5 py-2'>CONTINUE SHOPPING</button>
							<button className='border bg-[#ED165F] rounded px-5 py-2'>PROCEED TO CHECKOUT</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
