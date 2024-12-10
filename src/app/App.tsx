import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks/hooks';
import { setCurrentPage } from '../entities/product/model/productSlice';
import { fetchProducts } from '../entities/product/model/productsThunk';
import { RootState } from './store';
import { Pagination } from '@mui/material';
import styles from './App.module.css';

const App: FC = () => {
	const dispatch = useAppDispatch();

	const products = useSelector((state: RootState) => state.product.products);
	const loading = useSelector((state: RootState) => state.product.loading);

	const currentPage = useSelector(
		(state: RootState) => state.product.currentPage
	);
	const totalPages = useSelector(
		(state: RootState) => state.product.totalPages
	);

	useEffect(() => {
		dispatch(fetchProducts(currentPage.toString()));
	}, [dispatch, currentPage]);

	if (loading) return <div>Loading...</div>;

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		dispatch(setCurrentPage(value));
		dispatch(fetchProducts(value.toString()));
	};
	 console.log(totalPages);
	 
	return (
		<div className={styles.container}>
			<div className={styles.boxCard}>
				{Array.isArray(products) && products.length > 0 ? (
					products.map(product => (
						<div key={product.id} className={styles.card}>
							<img src={product.images[0]} alt={product.title} />
							<h3>{product.title}</h3>
							<p>{product.price}</p>
						</div>
					))
				) : (
					<div>No products available</div>
				)}
			</div>
			<div className={styles.pagination__box}>
				<Pagination
					count={totalPages.length}
					page={currentPage}
					onChange={handlePageChange}
					variant='outlined'
					color='primary'
				/>
			</div>
		</div>
	);
};

export default App;

