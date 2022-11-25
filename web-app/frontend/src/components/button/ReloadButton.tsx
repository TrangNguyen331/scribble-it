import React, { useEffect, useRef } from "react";
import { css } from "@emotion/css";

export const ReloadButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      if (buttonRef.current && effectRef.current) {
        const offsetLeft = buttonRef.current.getBoundingClientRect().left
        const offsetTop = buttonRef.current.getBoundingClientRect().top
        const relX = e.clientX - offsetLeft
        const relY = e.clientY - offsetTop
        effectRef.current.style.top = relY + 'px';
        effectRef.current.style.left = relX + 'px';
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (buttonRef.current && effectRef.current) {
        const offsetLeft = buttonRef.current.getBoundingClientRect().left
        const offsetTop = buttonRef.current.getBoundingClientRect().top
        const relX = e.clientX - offsetLeft
        const relY = e.clientY - offsetTop
        effectRef.current.style.top = relY + 'px';
        effectRef.current.style.left = relX + 'px';
      }
    }

    const addEventListeners = () => {
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.addEventListener("mouseout", handleMouseOut);
      }
    }

    const removeEventListeners = () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.removeEventListener("mouseout", handleMouseOut);
      }
    }

    addEventListeners();
    return () => removeEventListeners();
  }, [buttonRef.current, effectRef.current])

  return (
    <>
      <div ref={buttonRef} className={sWrapper}>
        <a className={sInner}>
          <div className={sTitle}>
            Clear
          </div>
          <div className={sEffectWrapper}>
            <span ref={effectRef} className={sEffect}/>
          </div>
        </a>
      </div>
    </>
  )
}

const sWrapper = css`
  height: 80px;
  width: 200px;
  margin-top: 2.5em;
  margin-bottom: 1em;
  transition: 0.3s ease;
  z-index: 1;
  &:hover {
    cursor: pointer;
    a::after {
      background-color: var(--c-pink-300);
    }
    span {
      width: 550px;
      height: 550px;
    }
  }
`

const sInner = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--b-md) solid black;
  border-radius: 25px;
  background-color: var(--c-white);
  transition: 0.5s ease;
  &::after {
		content: "";
		display: block;
		position: absolute;
		z-index: -1;
		width: 95%;
		height: 100%;
		bottom:  -12px;
		left: calc(50% - 46.5%);
    border-radius: 25px;
		border: 2px solid black;
		background-color: var(--c-pink-200);
    transition: 1s ease;
  }
`

const sTitle = css`
  font-size: 1.5em;
  font-weight: 500;
  line-height: 20px;
  padding: 1.25em 1.5em;
  z-index: 1;
`

const sEffectWrapper = css`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 25px;
  overflow: hidden;
`

const sEffect = css`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: var(--c-pink-100);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  overflow: hidden;
`