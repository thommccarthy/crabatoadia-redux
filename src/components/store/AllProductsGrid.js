import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as allProductsGridStyles from "./AllProductsGrid.module.css"

const AllProductsGrid = () => {
  const data = useStaticQuery(graphql`
    {
      store: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/store-items/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              price
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className={allProductsGridStyles.wrapper}>
      <div className={allProductsGridStyles.productsGrid}>
        {data.store.edges.map(edge => (
          <Link
            className={allProductsGridStyles.singleItemLink}
            to={`.${edge.node.fields.slug}`}
          >
            <div>
              <GatsbyImage
                image={
                  edge.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <h2 className={allProductsGridStyles.productTitle}>
              {edge.node.frontmatter.title}
            </h2>
            <p className={allProductsGridStyles.productPrice}>
              ${edge.node.frontmatter.price.toFixed(2)}
            </p>
            <Link
              className={allProductsGridStyles.shopNowLink}
              to={`.${edge.node.fields.slug}`}
            >
              Shop Now
            </Link>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllProductsGrid