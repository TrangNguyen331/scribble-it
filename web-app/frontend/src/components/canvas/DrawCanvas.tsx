import React, { useEffect, useRef} from "react";
import { Coordinates } from "@type/index";



export const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    
    <canvas 
      ref={canvasRef}
      width={300}
      height={300}
    />
  )
}