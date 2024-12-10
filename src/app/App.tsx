import { FC } from 'react';
import { Home } from '../pages/Home';

import styles from './App.module.css';

const App: FC = () => {
	
	return (
		<div className={styles.container}>
			<Home />
		</div>
	);
};

export default App;
