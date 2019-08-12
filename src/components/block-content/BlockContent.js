import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"

const config = {
  sanity: {
    projectId: process.env.GATSBY_PROJECTID,
    dataset: process.env.GATSBY_DATASET,
  },
}

const serializers = {
  types: {
    image({ node }) {
      if (!node.asset) {
        return
      }

      const fluidProps = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 777 },
        ...config.sanity
      )
      return (
        <figure>
          <Img fluid={fluidProps} alt={node.alt} />
          {node.caption && <figcaption>{node.caption}</figcaption>}
        </figure>
      )
    },
    code(props) {
      return (
        <pre className={`language-${props.node.language}`}>
          <code>{props.node.code}</code>
        </pre>
      )
    },
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>

        case "h2":
          return <h2>{props.children}</h2>

        case "h3":
          return <h3>{props.children}</h3>

        case "h4":
          return <h4>{props.children}</h4>

        default:
          return <p>{props.children}</p>
      }
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
