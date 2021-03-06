const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      artists: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/artist/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }

      releases: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/release/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }

      storeItems: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/store-items/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.artists.edges.forEach(({ node }) => {
    createPage({
      path: `artists${node.fields.slug}`,
      component: path.resolve(`./src/templates/artist-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.releases.edges.forEach(({ node }) => {
    createPage({
      path: `releases${node.fields.slug}`,
      component: path.resolve(`./src/templates/release-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.storeItems.edges.forEach(({ node }) => {
    createPage({
      path: `store${node.fields.slug}`,
      component: path.resolve(`./src/templates/store-item.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
