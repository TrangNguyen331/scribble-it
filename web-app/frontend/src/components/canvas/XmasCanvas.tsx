import React, { useRef, useState, useEffect } from "react";
import * as $ from 'three';
import { css } from "@emotion/css";

import Experience from "@comp/experience/Experience";

export const XmasCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    let animationFrameId: number;
    let experience: Experience | undefined | null;
    if (canvasRef.current) {
      experience = new Experience(canvasRef.current, true)
      if (experience) {
        experience.setRender(true)
        animationFrameId = experience.time.animationFrameId!
      }
    }

    return () => {
      experience?.removeEvents();
      experience?.setRender(false)
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className={sCanvas}
      />
    </>
  )
}

const sCanvas = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width:  100%;
  height: 100%;
  margin: 0;
  margin: 0;
  z-index: 99;
`