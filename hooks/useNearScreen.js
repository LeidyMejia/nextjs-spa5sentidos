import { useEffect, useState, useRef } from 'react';

export const useNearScreen = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  const observeRef = () => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    })
    observer.observe(ref.current);
  }

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observeRef();
    })
  }, [ref])

  return [show, ref];
}