import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((res) => res.json())
     .then((res) => {
        setData(res[currency]);
        setLoading(false);
      })
     .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [currency]);

  return { data, error, loading };
}

export default useCurrencyInfo;