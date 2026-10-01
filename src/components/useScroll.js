import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (thresh = 0.15) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
};

export const useReveal = () => {
  const controls = useAnimation();
  const [element, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return [element, controls];
};
