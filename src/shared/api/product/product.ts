import { apiInstance } from '../base';
import { IProducts } from './types';

const BASE_URL = 'products';

export const getProducts = (
	offset: number,
	limit: number
): Promise<{ products: IProducts[]; totalPages: number }> => {
	return apiInstance.get(`${BASE_URL}?offset=${offset}&limit=${limit}`);
};

