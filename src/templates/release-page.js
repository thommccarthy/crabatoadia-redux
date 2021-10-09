import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as releasePageStyles from "./release-page.module.css"

export default function ReleasePage({ data }) {
  console.log(data)

  return (
    <div>
      <Layout>
        <div className={releasePageStyles.wrapper}>
          <GatsbyImage
            className={releasePageStyles.albumArt}
            image={
              data.markdownRemark.frontmatter.albumArt.childImageSharp
                .gatsbyImageData
            }
          />
          <iframe
            style={{ border: `0`, width: `400px`, height: `274px` }}
            src={`${data.markdownRemark.frontmatter.bandcampEmbed}`}
            seamless
          >
            <a href={data.markdownRemark.frontmatter.bandcampLink}>
              Seasick Wall of Circuits by Thom McCarthy
            </a>
          </iframe>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ReleaseQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        artistName
        bandcampLink
        bandcampEmbed
        date
        albumArt {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
        title
      }
    }
  }
`
