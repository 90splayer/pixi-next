'use client';

import React, { useState } from 'react'

import { Sprite, useTick } from "@pixi/react";

const Ticker = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
   
    useTick(() => {
            const z = 0.05 + x;
            setX(Math.sin(z) * 100)
            setY(Math.sin(z/1.5) * 100)
        // setX(x + 1)
        // setY(y + 1)
    });

  return (
    <Sprite image={'/showdown-off.png'} x={0} y={0} />
  
  )
}

export default Ticker