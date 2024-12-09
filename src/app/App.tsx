import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks/hooks';
import {setCurrentPage} from '../entities/product/model/productSlice'

import { fetchProducts } from '../entities/product/model/productsThunk';
import { RootState } from './store';

// import { Pagination } from '../features/Pagination/index';

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

  console.log('Total Page', totalPages);
	console.log('Current Page', currentPage);

		const handlePageChange = (
			event: React.ChangeEvent<unknown>,
			value: number
		) => {
			dispatch(setCurrentPage(value)); // Устанавливаем новую текущую страницу
			dispatch(fetchProducts(value.toString())); // Запрашиваем продукты для новой страницы
		};

	return (
		<div className={styles.container}>
			<div className={styles.boxCard}>
				{Array.isArray(products) && products.length > 0 ? ( // Проверка на массив и наличие элементов
					products.map(product => (
						<div key={product.id} className={styles.card}>
							<h3>{product.title}</h3>
							<p>{product.price}</p>
							<img src={product.images[0]} alt={product.title} />
						</div>
					))
				) : (
					<div>No products available</div> // Сообщение об отсутствии продуктов
				)}
			</div>
			<div className={styles.paginBox}>
				<Pagination
					count={totalPages.length} // Общее количество страниц
					page={currentPage} // Текущая страница
					onChange={handlePageChange}
					variant='outlined' // Стиль пагинации
					color='primary' // Цвет пагинации
				/>
			</div>
		</div>
	);
};

export default App;
