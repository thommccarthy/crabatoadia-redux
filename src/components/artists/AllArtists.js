import React from "react"
import * as allArtistsStyles from "./AllArtists.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AllArtists = () => {
  const data = useStaticQuery(graphql`
    {
      artist: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              featuredPhoto {
                childImageSharp {
                  gatsbyImageData(formats: AUTO)
                }
              }
              biography
              description
              date
            }
            html
          }
        }
      }
    }
  `)

  const { edges } = data.artist

  return (
    <div className={allArtistsStyles.wrapper}>
      <h1 className={allArtistsStyles.header}>Artists</h1>
      <div className={allArtistsStyles.artistsGrid}>
        {edges.map(edge => (
          <div>
            <div className={allArtistsStyles.featuredPhotoWrapper}>
              <GatsbyImage
                className={allArtistsStyles.featuredPhoto}
                image={
                  edge.node.frontmatter.featuredPhoto.childImageSharp
                    .gatsbyImageData
                }
              />
            </div>
            <h2 className={allArtistsStyles.artistName}>
              {edge.node.frontmatter.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllArtists
