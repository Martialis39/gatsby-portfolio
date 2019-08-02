/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery2 {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            publishedAt(formatString: "DD/MM/YYYY")
            categories {
              _id
              title
            }

            title
            slug {
              current
            }
            _rawBody
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors
  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const id = edge.node._id
    const rawBody = edge.node._rawBody
    const slug = edge.node.slug
    const title = edge.node.title
    const date = edge.node.publishedAt

    const path = `/blog/${slug.current}/`
    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { id, rawBody, title, date, pagePath: path },
    })
  })
  const posts = postEdges.map(edge => {
    return {
      title: edge.node.title,
      slug: edge.node.slug.current,
      date: edge.node.publishedAt,
    }
  })

  createPage({
    path: "/blog/",
    component: require.resolve("./src/templates/blog.js"),
    context: { posts: posts, pagePath: "/blog/" },
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
}
