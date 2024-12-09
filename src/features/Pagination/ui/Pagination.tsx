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
		dispatch(setCurrentPage(pageNumber));
		dispatch(fetchProducts(pageNumber.toString()));
	};

	return (
		<div>
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index + 1}
					onClick={() => handlePageChange(index + 1)}
					style={{
						marginRight: '5px',
						backgroundColor: currentPage === index + 1 ? 'blue' : 'gray',
					}}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default Pagination;
