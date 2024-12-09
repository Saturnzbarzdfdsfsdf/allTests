import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, IProducts } from '../../../shared/api/product';
import { ErrorType, RejectedDataType } from '../../../shared/types';

export const fetchProducts = createAsyncThunk<
	{ products: IProducts[]; totalPages: number }, // Изменено на правильный тип возвращаемого значения
	string,
	{ readonly rejectValue: RejectedDataType }
>('products/fetchProducts', async (page: string, thunkAPI) => {
	const limit = 10; // Количество элементов на странице
	const offset = (parseInt(page) - 1) * limit; // Расчет смещения

	try {
		const response = await getProducts(offset, limit);
		return response; // Убедитесь, что функция getProducts возвращает правильный объект
	} catch (err: unknown) {
		const knownError = err as ErrorType;

		return thunkAPI.rejectWithValue({
			messageError: knownError.message,
			status: knownError.response?.status,
		});
	}
});
