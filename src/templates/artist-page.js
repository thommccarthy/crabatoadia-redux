import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ArtistPage({ data }) {
  return (
    <div>
      <Layout><GatsbyImage image={data.markdownRemark.frontmatter.featuredPhoto.childImageSharp.gatsbyImageData}/></Layout>
    </div>
  )
}

export const query = graphql`
  query ArtistQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredPhoto {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            id
          }
        }
      }
    }
  }
`
