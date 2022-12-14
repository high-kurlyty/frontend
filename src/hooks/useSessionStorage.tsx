import { Dispatch, SetStateAction, useState } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useSessionStorage<T>(
  keyName: string,
  defaultValue: T
): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = sessionStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: any) => {
    try {
      sessionStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
