import { useEffect } from 'react';

const useWakeLock = () => {
  const requestWakeLock = () => {
    if (document.visibilityState !== 'visible') return;
    navigator.wakeLock?.request('screen');
  };

  useEffect(() => {
    requestWakeLock();
    document.addEventListener('visibilitychange', requestWakeLock);

    return () => {
      document.removeEventListener('visibilitychange', requestWakeLock);
    };
  }, []);
};

export default useWakeLock;
