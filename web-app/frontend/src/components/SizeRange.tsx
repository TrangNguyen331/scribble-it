import React, { ChangeEvent } from "react";
import { css } from "@emotion/css";

interface Props {
  lineSize: number;
  setLineSize: React.Dispatch<React.SetStateAction<number>>;
}

export const SizeRange = ({ lineSize, setLineSize }: Props) => {
  const onChangeHandle = (e: any) => {
    setLineSize(e.target.value)
  }

  return (
    <div className={sWrapper}>
      <div className={sSlideContainer}>
        <input 
          className={sSlide}
          type={"range"}
          min="10" max="40" 
          value={lineSize} 
          onChange={onChangeHandle}
        />
      </div>
    </div>
  );
};

const height = "50px";
const trackHeight = "10px";
const thumbHeight = 30;

const upperColor = "#eaf8f1";
const lowerColor = "#9ae3c1";
const thumbColor = "#FAD0D1";
const thumbHoverColor = "#f9a0a2";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color: string, size: string) => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;
  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }
  return shadow;
};

const sWrapper = css`
  position: absolute;
  left: 2%;
  top: 29.25%;
  transform: translateY(20%);
  width: 10px;
`;

const sSlideContainer = css`
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  width: 300px;
  padding: 5px 15px;
  border: 3px solid black;
  border-radius: 10px;
  background: white;
`;

const sSlide = css`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 2px solid black;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-10px")};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 2px solid black;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border: 2px solid black;
    border-radius: 100%;
    transition: background-color 150ms;
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;
