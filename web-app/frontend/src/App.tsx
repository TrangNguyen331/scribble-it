import React from "react"
import { DrawCanvas } from "@comp/canvas/DrawCanvas"
import { Loader } from "@comp/Loader"
import { Container } from "@comp/Container"
import { Grid } from "@comp/Grid"
import { LineCanvas } from "@comp/canvas/LineCanvas"

export default function App() {

  return (
    <div>
      <Container>
        <Grid>
          <DrawCanvas/>
        </Grid>
        <LineCanvas/>
      </Container>
    </div>
  )
}