import React from "react"
import * as latestReleasesStyles from "./LatestReleases.module.css"
import { StaticImage } from "gatsby-plugin-image"

const LatestReleases = () => {
  return (
    <div className={latestReleasesStyles.wrapper}>
      <div className={latestReleasesStyles.headerWrapper}>
        <h1 className={latestReleasesStyles.header}>Latest Releases</h1>
      </div>
      {/* seasick */}
      <div className={latestReleasesStyles.albumsWrapper}>
        <div className={latestReleasesStyles.singleAlbumWrapper}>
          <StaticImage
            className={latestReleasesStyles.albumCover}
            src="../../images/index/seasick-cover.jpg"
          />
          <h3 className={latestReleasesStyles.albumArtist}>Thom McCarthy</h3>
          <p className={latestReleasesStyles.albumTitle}>
            seasick wall of circuits
          </p>
        </div>
        {/* Bottomless */}
        <div className={latestReleasesStyles.singleAlbumWrapper}>
          <StaticImage
            className={latestReleasesStyles.albumCover}
            src="../../images/index/bottomless-cover.jpg"
          />
          <h3 className={latestReleasesStyles.albumArtist}>Rocky Kaminski</h3>
          <p className={latestReleasesStyles.albumTitle}>
            bottomless pit/the cannibal song
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestReleases
