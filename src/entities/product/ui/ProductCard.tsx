import React, { FC } from 'react';

import { IProducts } from '../../../shared/api/product';

import styles from './ProductCard.module.css';

const ProductCard: FC<{ product: IProducts }> = React.memo(({ product }) => {

	if (!product.images || product.images.length === 0) {
		return <div>No images available</div>;
	}

	let imageUrls: string[];

	// Проверка, является ли первый элемент строкой JSON
	if (typeof product.images[0] === 'string') {
		try {
			// Если это строка JSON, разбираем её
			imageUrls = JSON.parse(product.images[0]);
		} catch (error) {
      
			console.error('Ошибка при разборе изображения:', error);
			return <div>Error loading image</div>;
		}
	} else {
		// Если это обычный массив, просто присваиваем его
		imageUrls = product.images;
	}

	if (!imageUrls || imageUrls.length === 0) {
		return <div>No images available</div>;
	}

	return (
		<div className={styles.card}>
			<img src={imageUrls[0]} alt={product.title} />
			<h3>{product.title}</h3>
			<p>{product.price}</p>
		</div>
	);
});

export default ProductCard;
