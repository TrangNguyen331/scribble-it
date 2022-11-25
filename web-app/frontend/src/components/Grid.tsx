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
  padding-left: 1.25em;
  padding-right: 1.25em;
  padding-top: 2em;
  padding-bottom: 2em;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`