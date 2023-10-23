import { useState, useEffect } from "react";

export function useTimer(time, action) {
  const [currentCount, setCount] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  function runTimer() {
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

  return { runTimer, currentCount, isRunning };
}
