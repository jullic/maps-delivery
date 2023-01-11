import axios from 'axios';
import { useEffect, useState } from 'react';

export function useRequest<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [err, setErr] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then(({ data }) => setData(data))
			.catch((err) => setErr(err))
			.finally(() => setIsLoading(false));
	}, []);

	return { isLoading, err, data };
}
