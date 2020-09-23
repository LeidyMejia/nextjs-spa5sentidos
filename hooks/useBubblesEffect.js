import {useEffect, useRef, useState} from 'react';

export function useBubblesEffect () {
  const r = useRef();
  const ref = useRef();

  const sizesArray = [4, 6, 8, 10];
  const [bubbles, setBubbles] = useState([]);
  r.current = { bubbles, setBubbles };

  const random = (arr) => {
    const math = Math;
    return arr[math.floor(math.random() * arr.length)]
  };

  const randomLeftPos = () => {
    const math = Math;
    return math.floor(math.random() * ref.current.offsetWidth)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const left = randomLeftPos();
      const size = random(sizesArray);

      r.current.setBubbles([...r.current.bubbles, <Bubble left={left} width={size} height={size} />]);
    }, 2000)

    return () => clearInterval(interval);
  }, [ref])

  return [
    ref,
    bubbles
  ]
}

const Bubble = ({ left, width, height }) => (
  <div className="individual-bubble" style={{
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: '#000',
    borderRadius: '100%',
    bottom: '10px',
    position: 'absolute',
    zIndex: '1',
    opacity: 1,
    transition: 'opacity 300ms ease-in',
  }}/>
)