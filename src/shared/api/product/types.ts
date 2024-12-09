interface ICategory {
	readonly category: {
		id: number;
		name: string;
		image: string;
	};
}

export interface IProducts {
	readonly id: number;
	readonly price: number;
	readonly images?: string[];
	readonly title: string;
	readonly description: string;
	readonly category: ICategory;
}
