import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"

export default ({ data }) => {
	//const edges = data.allMarkdownRemark.edges
	//console.log(edges.map(({ node }) => node.html))
	return (
		<Layout>
			<title>{data.site.siteMetadata.title}</title>
			<Container>
				<Row>
					<Col xs={{ order: 1, span: 12 }} md={6}>
						<div dangerouslySetInnerHTML={{
							__html: data.markdownRemark.html}}>
						</div>
					</Col>
					<Col md={{ order: 1 }}>
						<Img
							fluid={data.file.childImageSharp.fluid}
							alt="pic of me"
						/>
					</Col>
				</Row>
			</Container>
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
  file(relativePath: {eq: "main_pic_fixed.jpg"}) {
    childImageSharp {
      fluid(srcSetBreakpoints: [50, 100, 200]) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
