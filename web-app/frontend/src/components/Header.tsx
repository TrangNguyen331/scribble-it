import React from "react";
import { Link } from 'react-router-dom'
import { css } from "@emotion/css";
import Marquee from "react-fast-marquee";

export const Header = () => {
  return (
    <>
      <div className={sHeader}>
        <div className={sMarqueeWrapper}>
          <Marquee speed={80} gradient={false}>
            20110580 - Nguyễn Thị Thùy Trang <span style={{ marginLeft: '10px', marginRight: '10px' }}/>
            20110135 - Lê Thị Thanh Tuyết
          </Marquee>
        </div>
        <div className={sTittle}>
          <h1>AI Final Project</h1>
        </div>
        <div className={sGrid}>
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/"}>About Project</Link>
          </div>
          <div>
            <a href='#'>Digits Handwriting</a>
          </div>
          <div>
            <Link to={"/"}>Characters Handwriting</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const sHeader = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  border-bottom: var(--b-md) solid black;
  background-color: var(--c-white);
  &::after {
		content: "";
		display: block;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		bottom:  -15px;
		left: calc(50% - 49.5%);
    border-radius: 50px;
		border: 2px solid black;
		background-color: var(--c-pink-200);
	}
`;

const sMarqueeWrapper = css`
  padding: 0.5em 1.875em;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: white;
  div {
    font-size: 1.2em;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const sTittle = css`
  padding: 0.5em 1em;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-left: 2px solid;
  background: white;
  h1 {
    font-size: 1.5em;
    font-weight: 500;
  }
`;

const sGrid = css`
  display: grid;
  width: 80%;
  margin: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0.5em;
    background: linear-gradient(to left, white 50%, var(--c-pink-200) 50%) right;
    background-size: 200%;
    transition: .3s ease-out;
    &:hover {
      background-position: left;
      cursor: crosshair;    
    }
    a {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      color: #000;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 400;
      &:hover {
        cursor: crosshair;    
      }
    }
  }
  
  & > :nth-child(1), & :nth-child(2) {
    border-bottom: var(--b-sm) solid;
    border-left: var(--b-sm) solid;
  }
  & :nth-child(3), & :nth-child(4) {
    border-left: var(--b-sm) solid;
  }
`


