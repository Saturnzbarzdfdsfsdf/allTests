import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_URL = 'https://api.escuelajs.co/api/v1/';

class ApiInstance {
	// Экземпляр класса
	private axios: AxiosInstance;

	// Создаем новый экземпляр с заданными настройками
	constructor() {
		this.axios = axios.create({
			baseURL: API_URL,
			timeout: 120000,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	// Асинхронный метод для выполнения GET-запросов
	async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
		// GET-запрос к указанному endpoint, и return данные из ответа.
		const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
		return response.data;
	}
}
// Экспорт экземпляра класса
export const apiInstance = new ApiInstance();