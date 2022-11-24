import React from "react"
import { DrawCanvas } from "@comp/canvas/DrawCanvas"
import { Loader } from "@comp/Loader"
import { Container } from "@comp/Container"
import { Grid } from "@comp/Grid"

export default function App() {

  return (
    <div>
      <Container>
        <Grid>
          <DrawCanvas/>
        </Grid>
      </Container>
    </div>
  )
}