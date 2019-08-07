import React from "react"
import { Helmet } from "react-helmet"

function SEO({ children, title, pagePath, excerpt }) {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            excerpt
              ? excerpt
              : "Join me on my adventures through the wonderful lands of JavaScript!"
          }
        />
        <meta property="og:title" content="MartPart" />
        <meta
          property="og:description"
          content={
            excerpt
              ? excerpt
              : "Join me on my adventures through the wonderful lands of JavaScript!"
          }
        />
        <title>
          {title ? `${title} - MartPart` : "MartPart - speak Javascript to me"}
        </title>
        <link
          rel="canonical"
          href={
            pagePath ? `https://martpart.ee${pagePath}` : `https://martpart.ee`
          }
        />
        <html lang="en" />
      </Helmet>
      {children}
    </main>
  )
}

export default SEO
