import React from 'react';

const ProductsItem = () => {
	return (
		<article className='product__item'>
			<div className='product__img'>
				<img src='' alt='' />
			</div>
			<footer className='product__description'>
				<h3 className='product__title'></h3>
				<span className='product__price'></span>
			</footer>
		</article>
	);
};

export default ProductsItem;
