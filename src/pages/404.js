import React from "react"

import * as notFoundStyles from "./404.module.css"

const NotFound = () => {
  return (
    <div>
      <h1 className={notFoundStyles.header}>
        404 - route not found. Please try one of the links above.
      </h1>
    </div>
  )
}

export default NotFound
