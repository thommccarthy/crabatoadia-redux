import React from "react"
import LatestReleases from "../components/index/LatestReleases"
import * as indexStyles from "./index.module.css"
import WhatIs from "../components/index/WhatIs"

export default function Home() {
  return (
    <>
      <h1 className={indexStyles.visuallyHiddenHeader}>Crabatoadia Home</h1>
      <LatestReleases />
      <WhatIs />
    </>
  )
}
