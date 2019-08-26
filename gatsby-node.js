/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions

  const placeholder = await graphql(`
    query MyQuery {
      file(relativePath: { eq: "articlePlaceholder.jpg" }) {
        name
        publicURL
      }
    }
  `)

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
            technologies {
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
          next {
            title
            slug {
              current
            }
          }
          previous {
            title
            slug {
              current
            }
          }
          node {
            excerpt
            _id
            publishedAt(formatString: "DD/MM/YYYY")
            categories {
              title
            }
            title
            slug {
              current
            }
            _rawBody
            mainImage {
              asset {
                url
              }
            }
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
    const id = edge.node._id
    const rawBody = edge.node._rawBody
    const slug = edge.node.slug.current
    const title = edge.node.title
    const excerpt = edge.node.excerpt
    const deploymentUrl = edge.node.deploymentUrl
    const sourceUrl = edge.node.sourceUrl
    const technologies = edge.node.technologies
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
        technologies,
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
    const categories = edge.node.categories
    const excerpt = edge.node.excerpt ? edge.node.excerpt : null

    const nextPost = edge.previous
      ? {
          title: edge.previous.title,
          slug: edge.previous.slug.current,
        }
      : null
    const prevPost = edge.next
      ? {
          title: edge.next.title,
          slug: edge.next.slug.current,
        }
      : null

    reporter.info(`Creating blog post page: ${path}`)
    reporter.info(`Next post is: ${nextPost}`)
    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id,
        rawBody,
        title,
        date,
        pagePath: path,
        excerpt,
        categories,
        nextPost,
        prevPost,
      },
    })
  })

  const posts = postEdges.map(edge => {
    return {
      title: edge.node.title,
      slug: edge.node.slug.current,
      date: edge.node.publishedAt,
      image: edge.node.mainImage
        ? edge.node.mainImage.asset.url
        : placeholder.data.file.publicURL,
      excerpt: edge.node.excerpt,
    }
  })

  const projects = projectEdges.map(edge => {
    return {
      title: edge.node.title,
      slug: edge.node.slug.current,
      image: edge.node.mainImage
        ? edge.node.mainImage.asset.url
        : placeholder.data.file.publicURL,
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
