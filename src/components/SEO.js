import React from "react"
import { Helmet } from "react-helmet"

function SEO({ children, title, pagePath, excerpt }) {
  return (
    <main>
      <Helmet>
        <title>
          {title ? `${title} - MartPart` : "MartPart - speak Javascript to me"}
        </title>
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
        <html lang="en" />
      </Helmet>
      {children}
    </main>
  )
}

export default SEO
