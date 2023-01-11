import React, { useState } from 'react';
import { Table } from './components/Table/Table';
import { Map } from './components/Map/Map';

import styles from './App.module.css';

function App() {
	const [start, setStart] = useState<number[] | null>(null);
	const [end, setEnd] = useState<number[] | null>(null);
	console.log('rerender');

	return (
		<div className={styles.app}>
			<Table setStart={setStart} setEnd={setEnd} />
			<Map start={start} end={end} />
		</div>
	);
}

export default App;
