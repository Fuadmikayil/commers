import React, { useEffect, useState } from "react";
import axios from "axios";

export const getData = (query,variables={}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const demo = async () => {
      try {
        setData(null);
        setError(false);
        setLoading(true);
        const URL = "http://localhost:1337/graphql";

        const response = await axios.post(URL, { query,variables });
        const { data, error } = response;
        if (error) throw new Error(error.message);
        setData(data.data);
      } catch (err) {
        setError(true);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => demo(), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return { data, error, loading };
};
