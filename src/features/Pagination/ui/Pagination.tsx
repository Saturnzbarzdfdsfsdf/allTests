import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks/hooks';
import { fetchProducts } from '../../../entities/product/model/productsThunk';
import { setCurrentPage } from '../../../entities/product/model/productSlice';
import { RootState } from '../../../app/store';

const Pagination: FC = () => {
	const dispatch = useAppDispatch();

	const currentPage = useSelector(
		(state: RootState) => state.product.currentPage
	);
	const totalPages = useSelector(
		(state: RootState) => state.product.totalPages
	);

	const handlePageChange = (pageNumber: number) => {
		if (pageNumber !== currentPage) {
			dispatch(setCurrentPage(pageNumber));
			dispatch(fetchProducts(pageNumber.toString()));
		}
	};

  
	const renderPageNumbers = () => {
    const pageNumbers = [];

    
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					disabled={i === currentPage}
					style={{
						margin: '0 5px',
						padding: '10px 15px',
						backgroundColor: i === currentPage ? '#007bff' : '#f8f9fa',
						border: '1px solid #007bff',
						color: i === currentPage ? '#fff' : '#007bff',
						cursor: 'pointer',
					}}
          >
					{i}
				</button>
			);
		}
		return pageNumbers;
	};
  
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
		>
			{renderPageNumbers()}
		</div>
	);
};

export default Pagination;

// import { FC } from 'react';

// import { useSelector } from 'react-redux';
// import { useAppDispatch } from '../../../app/hooks/hooks';

// import { fetchProducts } from '../../../entities/product/model/productsThunk';

// import { setCurrentPage } from '../../../entities/product/model/productSlice';

// import { RootState } from '../../../app/store';

// const Pagination: FC = () => {
// 	const dispatch = useAppDispatch();

// 	const currentPage = useSelector(
// 		(state: RootState) => state.product.currentPage
// 	);
// 	const totalPages = useSelector(
// 		(state: RootState) => state.product.totalPages
// 	);

// 	const handlePageChange = (pageNumber: number) => {
// 		if (pageNumber !== currentPage) {
// 			// Проверка, чтобы избежать лишних вызовов
// 			dispatch(setCurrentPage(pageNumber));
// 			dispatch(fetchProducts(pageNumber.toString()));
// 		}
// 	};

// 	return (
// 		<div>

// 		</div>
// 	);
// };

// export default Pagination;
