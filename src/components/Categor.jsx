import closeicon from '../assets/images/close-icon.svg';

const Categor = ({ title }) => {
	return (
		<>
			<div className='w-[30%] mb-24'>
				<h1 className='text-3xl mb-16 font-bold tracking-wider'>{title}</h1>
				<h2 className='font-medium tracking-wider text-2xl'>CATEGORY</h2>
				<span className='w-full block h-[1px] my-4 bg-gray-400'></span>
				<ul className='categoryUl'>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='All' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Facemask' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Jewelry' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Watches' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Hair accessories' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Belts' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Backpacks' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Handbags' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Fragrances' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Sunglasses & eyewears' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Socks' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Hats and beanies' />
					</li>
					<li className='hover:text-[#ED165F]'>
						<input type='button' value='Gloves' />
					</li>
				</ul>
				<div className='flex justify-between mt-14'>
					<h2 className='text-2xl font-medium'>
						SIZE - <span className='text-gray-400'>EU/US</span>
					</h2>
					<div className='flex w-[60px] justify-between items-center'>
						<button className='w-[60px] flex items-center justify-between'>
							<h3 className='text-[#C4C4C4]'>Clear</h3>
							<img src={closeicon} alt='' />
						</button>
					</div>
				</div>
				<span className='w-full block h-[1px] my-4 bg-gray-400'></span>
				<ul className='grid grid-cols-3 gap-2'>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>35.5/5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>36/5.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>37.5/6.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>38/7</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>39/7.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>39.5/8</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>40/7.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>41/9.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>41.5/10</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>42/10.5</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>42/11</li>
					<li className='border rounded text-center py-2 hover:bg-[#ED165F] '>43/12</li>
				</ul>
				<div className='flex justify-between mt-14'>
					<h2 className='text-2xl font-medium'>COLOR</h2>
					<div className='flex w-[60px] justify-between items-center'>
						<button className='w-[60px] flex items-center justify-between'>
							<h3 className='text-[#C4C4C4]'>Clear</h3>
							<img src={closeicon} alt='' />
						</button>
					</div>
				</div>
				<span className='w-full block h-[1px] my-4 bg-gray-400'></span>
				<ul className='grid grid-cols-3 gap-5'>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#F3ECDB] rounded'></span>
						<p className='text-center'>Beige</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#465BA3] rounded'></span>
						<p className='text-center'>Blue</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#000] rounded'></span>
						<p className='text-center'>Black</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#F07B4E] rounded'></span>
						<p className='text-center'>Orange</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#41854D] rounded'></span>
						<p className='text-center'>Green</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#665147] rounded'></span>
						<p className='text-center'>Brown</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#893D88] rounded'></span>
						<p className='text-center'>Purple</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 gold h-8 bg-[#CAC1B8] rounded'></span>
						<p className='text-center'>Gold</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#CAC1B8] rounded'></span>
						<p className='text-center'>Taupe</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center'>White</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#F2A1B1] rounded'></span>
						<p className='text-center'>Pink</p>
					</li>
					<li className='flex gap-2'>
						<span className='w-8 h-8 bg-[#D23C47] rounded'></span>
						<p className='text-center'>Red</p>
					</li>
				</ul>
				<div className='flex justify-between mt-14'>
					<h2 className='text-2xl font-medium'>PRICE</h2>
					<div className='flex w-[60px] justify-between items-center'>
						<button className='w-[60px] flex items-center justify-between'>
							<h3 className='text-[#C4C4C4]'>Clear</h3>
							<img src={closeicon} alt='' />
						</button>
					</div>
				</div>
				<span className='w-full block h-[1px] my-4 bg-gray-400'></span>
				<ul className='gap-3 '>
					<li className='flex gap-2 mb-3'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center text-gray-800'>₦ - ₦1000</p>
					</li>
					<li className='flex gap-2 mb-3'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center text-gray-800'>₦10,000 - ₦20,000</p>
					</li>
					<li className='flex gap-2 mb-3'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center text-gray-800'>₦20,000 - ₦50,000</p>
					</li>
					<li className='flex gap-2 mb-3'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center text-gray-800'>₦50,000 - ₦100,000</p>
					</li>
					<li className='flex gap-2 mb-3'>
						<span className='w-8 h-8 border border-black bg-[#FFF] rounded'></span>
						<p className='text-center text-gray-800'>₦100,000 - ₦200,000</p>
					</li>
					<li className='flex gap-2 mb-3'>
						<span className='w-12 h-8 border border-black bg-[#FFF] rounded text-center'>₦</span>
						<p className='text-center text-gray-800'></p>
						<p>to</p>
						<span className='w-12 h-8 border border-black bg-[#FFF] rounded text-center'>₦</span>
						<p className='text-center text-gray-800'></p>
						<span className='w-12 h-8 border border-black rounded  text-white text-center bg-[#ED165F]'>Apply</span>
						<p className='text-center text-gray-800'></p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Categor;
