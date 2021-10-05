import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import LatestReleases from "../components/index/LatestReleases"
import WhatIs from "../components/index/WhatIs"

export default function Home() {
  return (
    <Layout>
      <LatestReleases />
      <WhatIs />
    </Layout>
  )
}
