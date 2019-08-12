/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions

  const projectQuery = await graphql(`
    query ProjectQuery {
      allSanityProject {
        edges {
          node {
            title
            excerpt
            _rawBody
            mainImage {
              asset {
                url
              }
            }
            slug {
              current
            }
            deploymentUrl
            sourceUrl
            techonologies {
              title
            }
          }
        }
      }
    }
  `)
  const result = await graphql(`
    query MyQuery2 {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            excerpt
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
  if (projectQuery.errors) throw projectQuery.errors
  const postEdges = (result.data.allSanityPost || {}).edges || []
  const projectEdges = (projectQuery.data.allSanityProject || {}).edges || []

  projectEdges.forEach((edge, index) => {
    console.log("Rawbody os", edge.node._rawBody)
    const id = edge.node._id
    const rawBody = edge.node._rawBody
    const slug = edge.node.slug.current
    const title = edge.node.title
    const excerpt = edge.node.excerpt
    const deploymentUrl = edge.node.deploymentUrl
    const sourceUrl = edge.node.sourceUrl
    const techonologies = edge.node.techonologies
    const path = `/projects/${slug}/`
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id,
        rawBody,
        title,
        excerpt,
        pagePath: path,
        deploymentUrl,
        sourceUrl,
        techonologies,
      },
    })
  })
  postEdges.forEach((edge, index) => {
    const id = edge.node._id
    const rawBody = edge.node._rawBody
    const slug = edge.node.slug
    const title = edge.node.title
    const date = edge.node.publishedAt
    const path = `/blog/${slug.current}/`
    const excerpt = edge.node.excerpt ? edge.node.excerpt : null
    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { id, rawBody, title, date, pagePath: path, excerpt },
    })
  })

  const posts = postEdges.map(edge => {
    console.log(edge.node.excerpt)
    return {
      title: edge.node.title,
      slug: edge.node.slug.current,
      date: edge.node.publishedAt,
    }
  })

  const projects = projectEdges.map(edge => {
    return {
      title: edge.node.title,
      slug: edge.node.slug.current,
      image: edge.node.mainImage.asset.url,
      excerpt: edge.node.excerpt,
    }
  })
  createPage({
    path: "/projects/",
    component: require.resolve("./src/templates/projects.js"),
    context: { projects: projects, pagePath: "/projects/" },
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
