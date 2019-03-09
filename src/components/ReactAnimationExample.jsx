import React from 'react';
import { AnimateOnChange } from '@nearform/react-animation';


const ReactAnimationExample = ({ title }) => (
  <AnimateOnChange
    animationIn="bounceIn"
    animatinoOut="bounceOut"
    durationOut={500}
  >
    {title}
  </AnimateOnChange>
)

export default ReactAnimationExample;
