import React from "react";

import { Header } from "@comp/Header"
import { Container } from "@comp/Container"
import { css } from "@emotion/css";

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Container>
        <Header/>
        <div className={sWrapperContent}>
          { children }
        </div>
      </Container>
    </>
  )
}

const sWrapperContent = css`
  width: 100%;
  height: 100%;
  margin-top: 3em;
`