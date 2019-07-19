import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"

function PageFrame({ children }) {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Join me on my adventures through the wonderful lands of JavaScript!"
        />
        <title>MartPart - speak Javascript to me</title>
        <link rel="canonical" href="https://martpart.ee" />
      </Helmet>
      <Header />
      {children}
    </main>
  )
}

export default PageFrame
