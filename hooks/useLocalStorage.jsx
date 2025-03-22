import { useState, useEffect, useMemo } from "react";
import config from "@/config";

export default function useLocalStorage(key, defaultValue) {
  const itemKey = useMemo(() => `${config.prefix}-${key}`, [key]);

  const [state, setState] = useState(defaultValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      try {
        const storedValue = localStorage.getItem(itemKey);
        setState(storedValue ? JSON.parse(storedValue) : defaultValue);
      } catch (error) {
        console.error("Failed to parse stored value. Error:", error);
      }
    }
    setIsHydrated(true);
  }, [itemKey, defaultValue]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(itemKey, JSON.stringify(state));
    }
  }, [state, itemKey, isHydrated]);

  return [state, setState];
};
