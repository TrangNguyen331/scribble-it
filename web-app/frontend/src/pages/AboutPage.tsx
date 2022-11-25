import React from "react";
import { css } from "@emotion/css";

import { Layout } from "@comp/Layout";
import { Loading } from "@comp/Loading";
import { XmasCanvas } from "@comp/canvas/XmasCanvas";

export default function AboutPage() {

  return (
    <>
      <Layout>
        <Loading/>
        <XmasCanvas/>
      </Layout>
    </>
  )
}