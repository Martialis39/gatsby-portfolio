import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"

const serializers = {
  types: {
    code(props) {
      console.log(props.node)
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
