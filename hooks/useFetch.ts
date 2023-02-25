import { useEffect, useState } from 'react';
interface IOptions {
    method?: 'GET' | 'POST' | 'PUT'
    headers?: { [x: string]: string }
}

const useFetch = (url: string, options: IOptions = {}) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [controller] = useState<AbortController>(new AbortController());
    const [counter, setCounter] = useState<number>(0);

    const refetch = () => {
        setCounter((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setResponse(null);
                const abortController = new AbortController();
                const signal = abortController.signal;
                const res = await fetch(url, { ...options, signal });
                if (!res.ok) {
                    throw new Error('Internal error')

                }
                const json = await res.json();
                setResponse(json);
            } catch (error: any) {
                if ('message' in error )  {
                    setError(error.message);
                } else {
                    setError('An error has ocurred')
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        }
    }, [counter]);

    return { response, loading, error, refetch };
};

export default useFetch;