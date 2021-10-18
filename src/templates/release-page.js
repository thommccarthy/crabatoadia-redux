import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as releasePageStyles from "./release-page.module.css"

export default function ReleasePage({ data }) {
  return (
    <div>
      <Layout>
        <div className={releasePageStyles.wrapper}>
          <h1 className={releasePageStyles.artistName}>
            {data.markdownRemark.frontmatter.artistName[0]}
          </h1>
          <h3 className={releasePageStyles.albumTitle}>
            {data.markdownRemark.frontmatter.title}
          </h3>
          {/* cover and bandcamp embed */}
          <div className={releasePageStyles.coverAndBandcampWrapper}>
            <GatsbyImage
              className={releasePageStyles.albumArt}
              image={
                data.markdownRemark.frontmatter.albumArt.childImageSharp
                  .gatsbyImageData
              }
            />
            <div className={releasePageStyles.bandcampWrapper}>
              <div className={releasePageStyles.playerAndHeaderWrapper}>
                <h4 className={releasePageStyles.listenHeader}>Listen</h4>
                <iframe
                  style={{
                    border: `0`,
                    width: `289px`,
                    height: `431px`,
                    display: `block`,
                    marginLeft: `auto`,
                    marginRight: `auto`,
                  }}
                  src={`${data.markdownRemark.frontmatter.bandcampEmbed}`}
                  seamless
                >
                  <a href={data.markdownRemark.frontmatter.bandcampLink}></a>
                </iframe>
              </div>
            </div>
          </div>
          <div class={releasePageStyles.creditsWrapper}>
            <div
              class={releasePageStyles.credits}
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ReleaseQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        artistName
        bandcampLink
        bandcampEmbed
        date
        description
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
