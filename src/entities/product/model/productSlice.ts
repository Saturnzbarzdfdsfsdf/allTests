import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProducts } from '../../../shared/api/product';
import { fetchProducts } from './productsThunk'; 

interface ProductsState {
	products: IProducts[];
	currentPage: number;
	totalPages: number;
	loading: boolean;
	error: string | null;
}

const initialState: ProductsState = {
	products: [],
	currentPage: 1,
	totalPages: 0,
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
			state.loading = true;
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchProducts.fulfilled,
				(
					state,
					action: PayloadAction<{ products: IProducts[]; totalPages: number }>
				) => {
					state.products = action.payload.products;
					state.totalPages = action.payload.totalPages;
					state.loading = false;
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				if (action.payload) {
					state.error = action.payload.messageError; // Устанавливаем сообщение об ошибке
				}
			});
	},
});

export const { setCurrentPage, setLoading } = productsSlice.actions;

export default productsSlice.reducer;
