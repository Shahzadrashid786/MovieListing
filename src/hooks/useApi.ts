import { useState, useEffect } from "react";

export const useApi = (url: string, options?: any) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    let json;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, data, error };
};
