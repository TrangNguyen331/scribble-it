import React, { useEffect, useRef, useState} from "react";
import { css } from '@emotion/css'

import { tCoordinates2D, iDrawLine } from "@type/index";
import { drawLine  } from "@util/drawUtil";
import { SketchButton } from "@comp/button/SketchButton";
import { ReloadButton } from "@comp/button/ReloadButton";
import { DownloadButton } from "@comp/button/DownloadButton";
import { ColorPicker } from "@comp/ColorPicker";
import { SizeRange } from "@comp/SizeRange";

export const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>()
  const [lineColor, setLineColor] = useState('rgb(0, 0, 0)')
  const [lineSize, setLineSize] = useState(25)

  useEffect(() => {
    let mouseDown: boolean = false;
    let start: tCoordinates2D = { x: 0, y: 0};
    let end: tCoordinates2D = { x: 0, y: 0};

    const handleMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      const canvasOffsetLeft = canvasRef.current ? canvasRef.current.getBoundingClientRect().left : 0;
      const canvasOffstTop = canvasRef.current ? canvasRef.current.getBoundingClientRect().top : 0;

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
        const canvasOffsetLeft = canvasRef.current ? canvasRef.current.getBoundingClientRect().left : 0;
        const canvasOffstTop = canvasRef.current ? canvasRef.current.getBoundingClientRect().top : 0;
  
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
  }, [context, lineColor, lineSize]);

  return (
    <>
      <div className={sWrapper}>
        <div className={sInner}>
          <canvas 
            ref={canvasRef}
            className={sCanvas}
            width={400}
            height={400}
          />
          <div className={sGrid}>
            <SketchButton context={context!}/>
            <ReloadButton context={context!}/>
          </div>
        </div>
      </div>
      <ColorPicker pickColor={lineColor} setPickColor={setLineColor}/>
      <SizeRange lineSize={lineSize} setLineSize={setLineSize}/>
      <DownloadButton context={context!}/>
    </>
  )
}

const sWrapper = css`
  transition: 0.3s ease;
  z-index: 1;
`

const sInner = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--b-md) solid black;
  border-radius: 50px;
  background-color: var(--c-white);
  padding: 2em 1.25em;
	&::after {
		content: "";
		display: block;
		position: absolute;
		z-index: -1;
		width: 95%;
		height: 100%;
		bottom:  -20px;
		left: calc(50% - 45.5%);
    border-radius: 50px;
		border: 2px solid black;
		background-color: var(--c-pink-200);
	}
`

const sCanvas = css`
  border-radius: 50px;
  background-color: var(--c-green-100);
  z-index: 99;
  &:hover {
    cursor: cell;    
  }
`

const sGrid = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 1.25em;
`