import { useEffect, useRef } from 'react';

function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
}

export default useOutsideClick;