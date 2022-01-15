import { useEffect, useRef, MutableRefObject } from 'react';

export const usePrevious = (linkCount: number): number => {
  const ref: MutableRefObject<number | undefined> = useRef();
  useEffect(() => {
    ref.current = linkCount;
  }, [linkCount]);
  return ref.current || 0;
};
