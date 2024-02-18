'use client';

import React, { useEffect, useState } from 'react'

import { Sprite, useTick } from "@pixi/react";

const Bolt = () => {

  const [spriteVisible, setSpriteVisible] = useState(true);

  useEffect(() => {
      const interval = setInterval(() => {
        // Toggle visibility of the sprite
        setSpriteVisible((prevVisible) => !prevVisible);
      }, 1000); // Toggle every 1 second
  
      return () => clearInterval(interval);
    }, []);

  return (
    <Sprite image={'/bolt@2x.png'} x={345} y={-50} />
  )
}

export default Bolt