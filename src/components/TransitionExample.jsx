import React from 'react';
import { Transition } from 'react-transition-group';
import anime from 'animejs';


const onEnter = (node) => (
  anime({
    targets: node,
    opacity: [0, 1],
    translateY: ['15%', '0%'],
    duration: 1000,
  })
);

const onExit = (node) => (
  anime({
    target: node,
    opacity: [1, 0],
    translateY: ['0%', '15%'],
  })
);

const TransitionExmaple = ({ data, currentTitle }) => (
  <>
    {
      data.map(item => (
        <Transition
          key={item}
          appear
          unmountOnExit
          in={item === currentTitle}
          onEnter={onEnter}
          onExit={onExit}
          timeout={0}
        >
          <div>{ item }</div>
        </Transition>
      ))
    }
  </>
);

export default TransitionExmaple;
