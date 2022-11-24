import React, { useEffect, useRef, useState} from "react";
import { css } from '@emotion/css'
import { tCoordinates, iDrawLine } from "@type/index";
import { drawLine  } from "@util/drawUtil";

export const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>()
  const [lineColor, setLineColor] = useState('#ffffff')
  const [lineSize, setLineSize] = useState(20)

  useEffect(() => {
    let mouseDown: boolean = false;
    let start: tCoordinates = { x: 0, y: 0};
    let end: tCoordinates = { x: 0, y: 0};

    const handleMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      const canvasOffsetLeft = canvasRef.current ? canvasRef.current.offsetLeft : 0;
      const canvasOffstTop = canvasRef.current ? canvasRef.current.offsetTop : 0;

      start = {
        x: e.clientX - canvasOffsetLeft,
        y: e.clientY - canvasOffstTop
      }

      end = {
        x: e.clientX - canvasOffsetLeft,
        y: e.clientY - canvasOffstTop
      }
    }
  
    const handleMouseUp = (e: MouseEvent) => {
      mouseDown = false;
    }
  
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseDown && context) {
        const canvasOffsetLeft = canvasRef.current ? canvasRef.current.offsetLeft : 0
        const canvasOffstTop = canvasRef.current ? canvasRef.current.offsetTop : 0

        start = {
          x: end.x,
          y: end.y
        };

        end = {
          x: e.clientX - canvasOffsetLeft,
          y: e.clientY - canvasOffstTop
        };
        
        drawLine({ 
          c: context, 
          from: start, 
          to: end,
          color: lineColor,
          size: lineSize
        });
      }
    }

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d')

      if (renderCtx) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);
        
        setContext(renderCtx);
      }
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', handleMouseDown);
        canvasRef.current.removeEventListener('mouseup', handleMouseUp);
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    }
  }, [context]);

  return (
    <canvas 
      ref={canvasRef}
      className={sCanvas}
      width={300}
      height={300}
    />
  )
}

const sCanvas = css`
  background-color: lightgreen;
`