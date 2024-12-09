import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../entities/product/model/productSlice'; 



const store = configureStore({
	reducer: {
		product: productsReducer, // Добавляем редюсер для управления состоянием продуктов
		// Добавьте другие редюсеры здесь, если это необходимо
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(), // Вы можете добавлять дополнительные middleware здесь
});


export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export default store;
