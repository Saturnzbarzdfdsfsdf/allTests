import { FC } from 'react';
import { Home } from '../pages/Home';

import styles from './App.module.css';
// import ProductSlider from '../features/swiper/ProductSlider';

const App: FC = () => {
	return (
		<div className={styles.container}>
			{/* <ProductSlider /> */}
			<Home />
		</div>
	);
};

export default App;
