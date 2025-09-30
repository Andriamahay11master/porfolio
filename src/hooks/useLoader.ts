import { useState, useEffect } from "react";

export const useLoader = (delay = 500) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, []);
  return loading;
};
