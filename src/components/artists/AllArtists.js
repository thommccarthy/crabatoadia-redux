import React from "react"
import * as allArtistsStyles from "./AllArtists.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AllArtists = () => {
  const data = useStaticQuery(graphql`
    {
      artist: allMarkdownRemark {
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

      {edges.map(edge => (
        <div className={allArtistsStyles.featuredPhotoWrapper}>
          <GatsbyImage
            className={allArtistsStyles.featuredPhoto}
            image={
              edge.node.frontmatter.featuredPhoto.childImageSharp
                .gatsbyImageData
            }
          />
        </div>
      ))}
    </div>
  )
}

export default AllArtists
