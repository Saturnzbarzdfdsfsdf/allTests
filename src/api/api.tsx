	// export const fetchProducts = async () => {
	// 		try {
	// 			const response = await fetch(
	// 				`${BASE_URL}?offset=${(currentPage - 1) * LIMIT}&limit=${LIMIT}`
	// 				// `${BASE_URL}?page=${currentPage}&limit=${LIMIT}`
	// 			);
	// 			if (!response.ok) {
	// 				throw new Error('Network response was not ok');
	// 			}
	// 			const data = await response.json();
	// 			setProducts(data); // Устанавливаем полученные данные в состояние
	// 			setTotalCount(data.length);
	// 		} catch (error) {
	// 			if (error instanceof Error) {
	// 				setError(error);
	// 				// Устанавливаем ошибку в состояние
	// 			}
	// 		} finally {
	// 			setIsLoading(false); // Завершаем загрузку
	// 		}
	// 	};