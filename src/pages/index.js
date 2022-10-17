import React from "react"
import LatestReleases from "../components/index/LatestReleases"
import * as indexStyles from "./index.module.css"
import WhatIs from "../components/index/WhatIs"
import { Helmet } from "react-helmet"
import StoreFeatured from "../components/index/StoreFeatured"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Crabatoadia Records</title>
        <meta
          name="description"
          content="Official website of Crabatoadia Records, a Philadelphia-based independent record label."
        />
      </Helmet>
      <h1 className={indexStyles.visuallyHiddenHeader}>Crabatoadia Home</h1>
      <LatestReleases />
      <WhatIs />
      <StoreFeatured />
    </>
  )
}
