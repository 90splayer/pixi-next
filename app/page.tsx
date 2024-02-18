"use client";
import dynamic from 'next/dynamic';
import { AppProvider } from "@pixi/react";



const PixiComponent = dynamic(() => import('./components/PixiComponent'), {
  ssr: false,
});

export default function Home() {
 
  return(
    <div>
      <PixiComponent/>
    </div>
  )
}