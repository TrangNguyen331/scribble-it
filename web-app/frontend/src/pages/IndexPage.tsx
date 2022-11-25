import React from "react";
import { AnimatePresence } from 'framer-motion'

import { DrawCanvas } from "@comp/canvas/DrawCanvas";
import { Layout } from "@comp/Layout";
import { Grid } from "@comp/Grid";
import { LineCanvas } from "@comp/canvas/LineCanvas";
import { Loading } from "@comp/Loading";
import { DownloadButton } from "@comp/button/DownloadButton";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Loading/>
        <Grid>
          <DrawCanvas />
        </Grid>
        <DownloadButton/>
        <LineCanvas />
      </Layout>
    </>
  );
}