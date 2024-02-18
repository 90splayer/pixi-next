'use client';

import React, { useEffect, useState } from 'react'
import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text, useTick } from "@pixi/react";
import { useMemo } from "react";
import wizard from "@/public/showdown-off.png";
import Image from 'next/image';
import Ticker from './Ticker';
import Slots from './Slots';
import Bolt from './Bolt';
import S from './S';
import H from './H';
import O from './O';
import W from './W';
import D from './D';
import O2 from './O2';
import W2 from './W2';
import N from './N';
import Must from './Must';
import Vegas from './Vegas';

const PixiComponent = () => {

    const blurFilter = useMemo(() => new BlurFilter(4), []);
   
    

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}
      options={{ 
        backgroundColor: 0x012b30, 
        antialias: true 
        }}>
        <Container width={window.innerWidth/2} height={300} 
         x={window.innerWidth / 2}  // Set x position to half of the window width
         y={200} // Set y position to half of the window height
         pivot={{ x: window.innerWidth / 4, y: 150 }}> 
        <Ticker/>
        <Vegas/>
        <Bolt/>
        <Slots/>
        <S/>
        <H/>
        <O/>
        <W/>
        <D/>
        <O2/>
        <W2/>
        <N/>
        <Must/>
        </Container>
      </Stage>
    );
}

export default PixiComponent