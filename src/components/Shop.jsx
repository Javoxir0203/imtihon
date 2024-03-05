import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import CartComp from './CartComp';
import CartItem from './CartComp';

const Shop = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	const handleClick = e => {
		e.preventDefault();
		window.scrollTo({ top: 0 });
	};
	// pagination
	const [page, setPage] = useState(1);
	const itemsPerPage = 10;
	const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

	const handleChange = (event, value) => {
		setPage(value);
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;

	const currentPageData = products?.slice(startIndex, endIndex);

	return (
		<div name='shop' className='container mx-auto px-12 pt-10 w-[1400px] mb-10'>
			<div className='flex justify-between items-center'>
				<span className='w-[400px] h-[2px] bg-black'></span>
				<h1 className='text-5xl'>Shop your style</h1>
				<span className='w-[400px] h-[2px] bg-black'></span>
			</div>
			<p className='text-2xl my-10 mx-auto text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing viverraattortor,egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id
				facilisis.
			</p>
			<ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-10'>
				{currentPageData?.map(product => (
					<CartItem product={product} key={product.id} />
				))}
			</ul>
			<div className='w-full  mb-24 flex items-center justify-center'>
				<Pagination count={totalPages} page={page} onChange={handleChange} variant='outlined' shape='rounded' className='ml-28' />
			</div>
			<div>
				<button onClick={handleClick} className='w-10 h-10 ml-[1140px] bg-gray-600 border rounded '>
					<i className='fa-solid  fa-arrow-up'></i>
				</button>
			</div>
		</div>
	);
};

export default Shop;
