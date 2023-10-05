import { useEffect, useState } from "react";

export const useDebounce = <T>(
  value: T,
  setValue: (value: T) => void,
  timeout?: number
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [query, setQuery] = useState(value);
  const interval = timeout || 1000;

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(query), interval);
    return () => clearTimeout(timeoutId);
  }, [setValue, interval, query]);

  return [query, setQuery];
};
