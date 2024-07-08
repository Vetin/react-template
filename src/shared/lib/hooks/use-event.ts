import {useLayoutEffect, useRef} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEvent = <A extends any[], R>(cb: (...args: A) => R): typeof cb => {
  const fnRef = useRef(cb);

  useLayoutEffect(() => {
    fnRef.current = cb;
  }, [cb]);

  return fnRef.current;
};
