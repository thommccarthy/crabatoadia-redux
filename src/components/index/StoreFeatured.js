import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as storeFeaturedStyles from "./StoreFeatured.module.scss"

const StoreFeatured = () => {
  const data = useStaticQuery(graphql`
    {
      store: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/store-items/" } }
        sort: { fields: frontmatter___id, order: [ASC] }
        limit: 4
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
    <div
      style={{ textAlign: `center` }}
      className={storeFeaturedStyles.wrapper}
    >
      <h2>From the Store</h2>
      <Link to="/store" className="CTA">
        Shop All
      </Link>
      <ul className={storeFeaturedStyles.productGrid}>
        {data.store.edges.map(edge => (
          <li>
            <Link to={`/store${edge.node.fields.slug}`}>
              <GatsbyImage
                alt={`${edge.node.frontmatter.title} product image`}
                image={
                  edge.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
              />
            </Link>
            <Link to={`/store${edge.node.fields.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreFeatured
