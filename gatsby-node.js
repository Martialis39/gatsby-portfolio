const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              date
              title
              tags
            }
            excerpt
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const colors = ["#66d9ef", "#64c7db", "#23b4d1", "#0f3942", "#0d1516"]

  const edges = result.data.allMarkdownRemark.edges
  // Create individual pages
  edges.forEach(({ node }, index) => {
    console.log(index)
    console.log(colors)
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
      context: {
        excerpt: node.excerpt,
        color: colors[colors.length % index],
        test: "test",
      },
    })
  })

  createPage({
    path: "/blog",
    component: path.resolve(`src/templates/articles.js`),
    context: { edges },
  })
}
