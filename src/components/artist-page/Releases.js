import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as releasesStyles from "./Releases.module.css"

export default function Releases({ artistName }) {
  const releaseData = useStaticQuery(graphql`
    query query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/release/" } }
        sort: { fields: [frontmatter___releaseDate], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              artistName
              bandcampLink
              date
              releaseDate
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
      {filteredReleases.length >= 1 ? (
        filteredReleases.map(edge => (
          <Link
            to={`../../releases${edge.node.fields.slug}`}
            className={releasesStyles.singleAlbum}
          >
            <GatsbyImage
              className={releasesStyles.albumCover}
              image={
                edge.node.frontmatter.albumArt.childImageSharp.gatsbyImageData
              }
            />
            <p className={releasesStyles.albumArtist}>
              {edge.node.frontmatter.artistName[0]}
            </p>
            <p className={releasesStyles.albumTitle}>
              {edge.node.frontmatter.title}
            </p>
          </Link>
        ))
      ) : (
        <p className={releasesStyles.comingSoon}>Coming Soon!</p>
      )}
    </div>
  )
}
