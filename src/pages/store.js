import React from "react"
import Layout from "../components/layout"
import AllProductsGrid from "../components/store/AllProductsGrid"
import StoreTop from "../components/store/StoreTop"

const Store = () => {
  return (
    <Layout>
      <StoreTop />
      <AllProductsGrid />
    </Layout>
  )
}

export default Store
