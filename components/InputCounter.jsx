"use client";

import "@/css/input-counter.scss";
import { useEffect, useState } from "react";

export default function InputCounter({ state, max }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (state.length > max) setError(true);
    if (state.length <= max) setError(false);
  }, [state, max]);

  return (
    <div className={`input-counter ${error ? "text-red-500" : ""}`}>
      <span>{state.length}/{max}</span>
    </div>
  );
}