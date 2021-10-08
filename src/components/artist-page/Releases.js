import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as releasesStyles from "./Releases.module.css"

export default function Releases({ artistName }) {
  const releaseData = useStaticQuery(graphql`
    query query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/release/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              artistName
              bandcampLink
              date
              albumArt {
                childImageSharp {
                  gatsbyImageData
                  id
                }
              }
              title
            }
            html
          }
        }
      }
    }
  `)

  //   filter artist data to match the artist name which has been passed as a prop

  const filteredReleases = releaseData.allMarkdownRemark.edges.filter(edge =>
    edge.node.frontmatter.artistName.includes(`${artistName}`)
  )

  console.log(filteredReleases)

  return (
    <div className={releasesStyles.releasesGrid}>
      {filteredReleases.map(edge => (
        <div className={releasesStyles.singleAlbum}>
          <GatsbyImage
            className={releasesStyles.albumCover}
            image={
              edge.node.frontmatter.albumArt.childImageSharp.gatsbyImageData
            }
          />
          <p className={releasesStyles.albumArtist}>
            {edge.node.frontmatter.artistName}
          </p>
          <p className={releasesStyles.albumTitle}>
            {edge.node.frontmatter.title}
          </p>
        </div>
      ))}
    </div>
  )
}
