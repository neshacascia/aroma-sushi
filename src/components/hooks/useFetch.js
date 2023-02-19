import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + url, {
          headers: {
            Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
          },
        });

        const data = await res.json();
        setData(data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
