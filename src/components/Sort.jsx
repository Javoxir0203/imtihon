import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import CartComp from './CartComp';
import CartItem from './CartComp';

const Sort = () => {
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
	const [page, setPage] = useState(1);
	const itemsPerPage = 10;
	const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

	const handleChange = (event, value) => {
		setPage(value);
	};
	const handleClick = e => {
		e.preventDefault();
		window.scrollTo({ top: 0 });
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;

	const currentPageData = products?.slice(startIndex, endIndex);

	return (
		<div className='w-[75%] pl-12 mb-10'>
			<div className='w-100 flex pt-[95px] justify-end'>
				<select className='border float-right block outline-none border-black p-2'>
					<option value=''>Sort by: Most popular</option>
					<option value=''>Jumpsuits</option>
					<option value=''>Leather</option>
					<option value=''>Sweaters & knits</option>
					<option value=''>Jackets and coats</option>
				</select>
			</div>
			<span className='w-100 block h-[1.5px] my-4 bg-gray-400'></span>
			<ul className='grid grid-cols-3 gap-6 relative mb-10'>
				{currentPageData?.map(product => (
					<CartItem product={product} key={product.id} />
				))}
			</ul>
			<div className='w-full  mb-24 flex  '>
				<Pagination count={totalPages} page={page} onChange={handleChange} variant='outlined' shape='rounded' className='ml-28' />
			</div>
			<div>
				<button onClick={handleClick} className='w-10 h-10 ml-[840px] bg-gray-600 border rounded '>
					<i className='fa-solid  fa-arrow-up'></i>
				</button>
			</div>
		</div>
	);
};

export default Sort;
