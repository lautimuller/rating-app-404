import { useState, useEffect } from "react";
import axios from "axios";
import { GITHUB_API_URL } from "../utils/constants";

type ErrorType = Error | null;
type Data<T> = T | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    if (url === GITHUB_API_URL) {
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            console.error("Response error:", err.response);
            setError(new Error(""));
          } else if (err.request) {
            console.error("Request error:", err.request);
            setError(new Error("No Responses from Server"));
          } else {
            console.error("Error:", err.message);
            setError(new Error(`Error: ${err.message}`));
          }
        } else {
          setError(err as Error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
