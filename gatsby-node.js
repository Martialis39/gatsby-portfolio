/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")

exports.createPages = async ({ actions: { createPage } }) => {
  // Fetch posts
  const query = await axios.get(
    `https://wordpress.martpart.ee/wp-json/wp/v2/posts?_embed`
  )

  const posts = query.data
  // create a blog or "posts" page
  createPage({
    path: `/blog/`,
    component: require.resolve("./src/templates/blog.js"),
    context: {
      posts: posts,
    },
  })

  // Create a page for each post.
  console.log("Posts are", posts)
  posts.forEach(post => {
    // language is the language code, like ET or EN
    createPage({
      path: `/blog/${post.slug}/`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        title: post.title.rendered,
        content: post.content.rendered,
        date: post.date
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("/"),
      },
    })
  })
}
