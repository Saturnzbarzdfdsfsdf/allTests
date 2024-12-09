import { FC, useEffect, useState, ChangeEvent } from 'react';

import { BASE_URL } from '../utils/const';

import { Pagination } from '@mui/material';

import styles from './App.module.css';

interface IProducts {
	title: string;
	price: string;
	images: string[];
	id: number;
}

const App: FC = () => {
	// Продукт
	const [products, setProducts] = useState<IProducts[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	// Пагинация
	const [totalCount, setTotalCount] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState(1);

	const LIMIT = 5;
	const limitTotalPage = 1;

	const onChangePagination = (
		event: ChangeEvent<unknown>, // Изменяем тип на unknown
		page: number
	) => {
		setCurrentPage(page); // Устанавливаем текущую страницу
	};
	console.log('This PRODUCT', products);

// 'https://api.escuelajs.co/api/v1/products';

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					`${BASE_URL}?offset=${(currentPage - 1) * LIMIT}&limit=${LIMIT}`
					// `${BASE_URL}?page=${currentPage}&limit=${LIMIT}`
				);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setProducts(data); // Устанавливаем полученные данные в состояние
				setTotalCount(data.length);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
					// Устанавливаем ошибку в состояние
				}
			} finally {
				setIsLoading(false); // Завершаем загрузку
			}
		};

		fetchProducts(); // Вызываем функцию фетча
	}, [currentPage]);

	// Обработка состояния загрузки и ошибок
	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error.message}</div>;

	const totalPages = Math.ceil(totalCount / limitTotalPage);
	// const sliceProduct = products.slice(0, LIMIT);

	return (
		<div className={styles.container}>
			<div className={styles.boxCard}>
				{products.map(product => (
					<div key={product.id} className={styles.card}>
						<h3>{product.title}</h3>
						<p>{product.price}</p>
						<img src={product.images[0]} alt={product.title} />
					</div>
				))}
				<Pagination
					size='large'
					count={totalPages}
					page={currentPage}
					onChange={onChangePagination}
					color='secondary'
				/>
			</div>
		</div>
	);
};

export default App;
