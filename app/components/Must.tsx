'use client';

import React, { useState } from 'react'

import { Sprite, useTick } from "@pixi/react";

const Must = () => {

  return (
    <Sprite image={'/must_drop.png'} x={150} y={200} width={500} height={200} />
  )
}

export default Must