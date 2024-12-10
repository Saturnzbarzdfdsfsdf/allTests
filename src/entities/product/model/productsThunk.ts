import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts, IProducts } from '../../../shared/api/product';
import { ErrorType, RejectedDataType } from '../../../shared/types';

export const fetchProducts = createAsyncThunk<
	{ products: IProducts[]; totalPages: number }, // при успешном запросе вернется obj
	string,
	{ readonly rejectValue: RejectedDataType } // Вернется в случае ошибки
>('products/fetchProducts', async (page: string, thunkAPI) => {

	const limit = 4;
	const offset = (parseInt(page) - 1) * limit;

	try {

		const response = await getProducts(offset, limit);
		return response;

	} catch (err: unknown) {

		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message,
			status: knownError.response?.status, // Статус ответа от сервера (есть доступен)
		});
	}
});

