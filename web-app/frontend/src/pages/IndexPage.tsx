import React from "react";
import { css } from "@emotion/css";

import { DrawCanvas } from "@comp/canvas/DrawCanvas"
import { Loader } from "@comp/Loader"
import { Container } from "@comp/Container"
import { Grid } from "@comp/Grid"
import { LineCanvas } from "@comp/canvas/LineCanvas"
import { Header } from "@comp/Header"

export default function IndexPage() {
  return (
    <>
      <Container>
        <Header/>
        <div className={sWrapperContent}>
          <Grid>
            <DrawCanvas/>
          </Grid>
          <LineCanvas/>
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