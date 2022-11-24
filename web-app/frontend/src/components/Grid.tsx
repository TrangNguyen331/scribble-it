import React, { Children } from "react";
import { css } from '@emotion/css'

interface Props {
  children: React.ReactNode;
}

export const Grid = (props: Props) => {
  const { children } = props

  return (
    <>
      <div className={sGrid}>
        { children }
      </div>
    </>
  )
}

const sGrid = css`
  background-color: #F3F3F5;
  padding-left: 1.25em;
  padding-right: 1.25em;
  padding-top: 2em;
  padding-bottom: 4em;
  z-index: 1;
`