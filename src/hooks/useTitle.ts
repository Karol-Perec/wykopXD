import { useEffect } from 'react';

const useTitle = (title: string | undefined) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `WykopXD${title ? ` | ${title}` : ''}`;
    return () => {
      document.title = prevTitle;
    };
  });
};

export default useTitle;
