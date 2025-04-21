import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WormholeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color || '#4a00e0'};
  opacity: ${props => props.opacity || 0.7};
`;

const Wormhole = ({ isActive = false }) => {
  // Animation variants
  const containerVariants = {
    active: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    inactive: {
      scale: 0,
      opacity: 0,
    },
  };

  const circleVariants = {
    active: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    inactive: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <WormholeContainer
      as={motion.div}
      variants={containerVariants}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
    >
      {[...Array(5)].map((_, i) => (
        <Circle
          key={i}
          variants={circleVariants}
          color={`hsl(${260 + i * 15}, 80%, ${50 + i * 5}%)`}
          style={{
            width: `${100 - i * 15}px`,
            height: `${100 - i * 15}px`,
            zIndex: 5 - i,
          }}
        />
      ))}
    </WormholeContainer>
  );
};

export default Wormhole;