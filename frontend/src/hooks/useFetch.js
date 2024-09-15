import { useState, useEffect } from "react";

const useFetch = BASE_URL => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(BASE_URL);

        if (!res.ok) {
          setError("failed to fetch");
        }
        const result = await res.json();

        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
