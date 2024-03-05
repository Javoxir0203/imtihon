import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartComp({ product }) {
	const addToCart = product => {
		console.log(product.id);
	};
   
	return (
		<li key={product.id} className='bg-white rounded-lg shadow-md hover:scale-105 transition duration-300 group relative'>
			<img src={product.image} alt={product.title} className='w-full h-[250px]' />
			<div className='p-4'>
				<h2 className='text-lg font-semibold mb-2 text-center group-hover:text-red-500'>{product.title}</h2>
				<p className='text-gray-600 mb-2 text-3xl text-center group-hover:text-red-600'>${product.price}</p>
			</div>
			<div
				className='hidden group-hover:flex absolute top-0 left-0 w-full h-full
						 items-center justify-center flex-col  bg-[#00000033] rounded'
			>
				<button className='bg-white   px-2 py-[px]'>
					<i className='fa-regular text-red-500 fa-heart text-[30px] rounded'></i>
				</button>
				<br />
				<button className='text-white py-4 flex items-center justify-center gap-3 bg-white w-48 rounded ' onClick={() => addToCart(product)}>
					<span className='text-black'>ADD TO CART</span>
					<i className='fa-solid text-red-500 fa-cart-shopping'></i>
				</button>
			</div>
		</li>
	);
}

export default CartComp;
