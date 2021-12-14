import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as artistPageStyles from "./artist-page.module.css"
import Releases from "../components/artist-page/Releases"

export default function ArtistPage({ data }) {
  return (
    <div className={artistPageStyles.wrapper}>
      <h1 className={artistPageStyles.title}>
        {data.markdownRemark.frontmatter.title}
      </h1>
      <GatsbyImage
        alt={`${data.markdownRemark.frontmatter.title} Featured Photo`}
        image={
          data.markdownRemark.frontmatter.featuredPhoto.childImageSharp
            .gatsbyImageData
        }
        className={artistPageStyles.featuredPhoto}
      />
      <article className={artistPageStyles.bioWrapper}>
        <h2 className={artistPageStyles.bioHeader}>Biography</h2>
        <div
          className={artistPageStyles.bioText}
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.frontmatter.biography,
          }}
        />
      </article>
      <div className={artistPageStyles.bioWrapper}>
        <h2 className={artistPageStyles.bioHeader}>Releases</h2>
        <Releases artistName={data.markdownRemark.frontmatter.title} />
      </div>
    </div>
  )
}

export const query = graphql`
  query ArtistQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        biography
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
