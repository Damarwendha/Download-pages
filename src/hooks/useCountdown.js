import { useState, useEffect } from "react";

export function useCountdown(time, action) {
  const [currentCount, setCount] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  function runCountdown() {
    setIsRunning(true);
  }

  useEffect(() => {
    let interval;
    if (isRunning && currentCount > 0) {
      interval = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
    }

    if (currentCount === 0) {
      action();
      setIsRunning(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentCount, isRunning, action]);

  return { runCountdown, currentCount, isRunning };
}
