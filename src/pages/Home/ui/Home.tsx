import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks/hooks';

import { setCurrentPage } from '../../../entities/product/model/productSlice';
import { fetchProducts } from '../../../entities/product/model/productsThunk';

import {
	selectProducts,
	selectCurrentPage,
	// selectTotalPages,
} from '../../../entities/product/model/selectors';

import { ProductCard } from '../../../entities/product';

import { Pagination } from '@mui/material';

import styles from './Home.module.css';

const Home: FC = () => {
	const dispatch = useAppDispatch();

	const products = useSelector(selectProducts);
	const currentPage = useSelector(selectCurrentPage);
	// const totalPages = useSelector(selectTotalPages);

	useEffect(() => {
		dispatch(fetchProducts(currentPage.toString()));
	}, [dispatch, currentPage]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		dispatch(setCurrentPage(value));
		dispatch(fetchProducts(value.toString()));
	};
	return (
		<>
			<div className={styles.boxCard}>
				{Array.isArray(products) && products.length > 0 ? (
					products.map(product => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<div>No products available</div>
				)}
			</div>
			<div className={styles.pagination__box}>
				<Pagination
					count={products.length}
					page={currentPage}
					onChange={handlePageChange}
					variant='outlined'
					color='primary'
				/>
			</div>
		</>
	);
};

export default Home;
