import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default ({ data }) => {
	return (
		<Layout>
			<Container>
				<Row>
					<Col xs="12" lg="4">
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}

export const query = graphql`
query projectQuery {
  allProjectsJson {
    edges {
      node {
        name
        img {
          alt
          path
        }
        links {
          text
          url
        }
        desc
      }
    }
  }
}
`

