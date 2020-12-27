import react, { useEffect } from "react";

type StartPolling = (interval: number) => void;
type CleanUpPolling = () => void;

export default function usePolling(
  startFn: StartPolling,
  cleanFn: CleanUpPolling,
  intervalTime: number
) {
  useEffect(() => {
    startFn(intervalTime);
    return () => {
      cleanFn();
    };
  }, []);
}
