import { apiGet } from '../base';

import { IProducts } from './types';

const PRODUCTS_ENDPOINT = 'products';

export const getProducts = async (
	offset: number,
	limit: number
): Promise<{ products: IProducts[]; totalPages: number }> => {
	return await apiGet(`${PRODUCTS_ENDPOINT}?offset=${offset}&limit=${limit}`);
};
