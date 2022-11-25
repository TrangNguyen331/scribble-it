import React from "react";
import { AnimatePresence } from 'framer-motion'

import { DrawCanvas } from "@comp/canvas/DrawCanvas";
import { Layout } from "@comp/Layout";
import { Grid } from "@comp/Grid";
import { LineCanvas } from "@comp/canvas/LineCanvas";
import { Loading } from "@comp/Loading";
import { SketchButton } from "@comp/button/SketchButton";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Loading/>
        <Grid>
          <DrawCanvas />
        </Grid>
        <LineCanvas />
      </Layout>
    </>
  );
}