import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
	//const edges = data.allMarkdownRemark.edges
	//console.log(edges.map(({ node }) => node.html))
	return (
		<Layout>
			<title>{data.site.siteMetadata.title}</title>
			<div dangerouslySetInnerHTML={{
				__html: data.markdownRemark.html}}>
			</div>
		</Layout>
	)
}
export const query = graphql`
query MyQuery {
  markdownRemark {
    html
  }
  site {
	siteMetadata {
	  title
	}
  }
}
`
