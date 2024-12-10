import { IProducts } from '../../../shared/api/product';

export interface IProductsState {
	products: IProducts[];
	currentPage: number;
	totalPages: number;
	loading: boolean;
	error: string | null;
}
