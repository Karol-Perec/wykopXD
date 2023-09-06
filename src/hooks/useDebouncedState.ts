import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const useDebouncedState = <T>(
  initialValue: T,
  delayMs: number
): [T, T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const debounceTimer = useRef<number>();

  useEffect(() => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => setDebouncedValue(value), delayMs);
  }, [delayMs, value]);

  return [value, debouncedValue, setValue];
};

export default useDebouncedState;
