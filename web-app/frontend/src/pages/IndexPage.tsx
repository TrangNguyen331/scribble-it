import React from "react";

import { DrawCanvas } from "@comp/canvas/DrawCanvas";
import { Layout } from "@comp/Layout";
import { Grid } from "@comp/Grid";
import { LineCanvas } from "@comp/canvas/LineCanvas";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Grid>
          <DrawCanvas />
        </Grid>
        <LineCanvas />
      </Layout>
    </>
  );
}