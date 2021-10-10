import React from "react"
import * as latestReleasesStyles from "./LatestReleases.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const LatestReleases = () => {
  const releaseData = useStaticQuery(graphql`
    query {
      releases: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/release/" } }
        limit: 2
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              albumArt {
                childImageSharp {
                  gatsbyImageData
                }
              }
              artistName
              title
              releaseDate(formatString: "")
            }
          }
        }
      }
    }
  `)

  console.log(releaseData.releases)
  const newestAlbum = {
    albumTitle: releaseData.releases.edges[0].node.frontmatter.title,
    albumArtist: releaseData.releases.edges[0].node.frontmatter.artistName,
    albumCover:
      releaseData.releases.edges[0].node.frontmatter.albumArt.childImageSharp
        .gatsbyImageData,
    slug: releaseData.releases.edges[0].node.fields.slug,
  }

  const secondNewestAlbum = {
    albumTitle: releaseData.releases.edges[1].node.frontmatter.title,
    albumArtist: releaseData.releases.edges[1].node.frontmatter.artistName,
    albumCover:
      releaseData.releases.edges[1].node.frontmatter.albumArt.childImageSharp
        .gatsbyImageData,
    slug: releaseData.releases.edges[1].node.fields.slug,
  }

  return (
    <div className={latestReleasesStyles.wrapper}>
      <div className={latestReleasesStyles.headerWrapper}>
        <h1 className={latestReleasesStyles.header}>Latest Releases</h1>
      </div>
      {/* seasick */}
      <div className={latestReleasesStyles.albumsWrapper}>
        {/* second newest album */}
        <Link
          to={`/releases${secondNewestAlbum.slug}`}
          className={latestReleasesStyles.singleAlbumWrapper}
        >
          <GatsbyImage
            className={latestReleasesStyles.albumCover}
            image={secondNewestAlbum.albumCover}
          />
          <h3 className={latestReleasesStyles.albumArtist}>
            {secondNewestAlbum.albumArtist[0]}
          </h3>
          <p className={latestReleasesStyles.albumTitle}>
            {secondNewestAlbum.albumTitle}
          </p>
        </Link>
        {/* Newest Album */}
        <Link
          to={`/releases${newestAlbum.slug}`}
          className={latestReleasesStyles.singleAlbumWrapper}
        >
          <GatsbyImage
            className={latestReleasesStyles.albumCover}
            image={newestAlbum.albumCover}
          />
          <h3 className={latestReleasesStyles.albumArtist}>
            {newestAlbum.albumArtist[0]}
          </h3>
          <p className={latestReleasesStyles.albumTitle}>
            {newestAlbum.albumTitle}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default LatestReleases
