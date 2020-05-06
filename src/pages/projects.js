//TODO figure out how to get images working
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Button from "react-bootstrap/Button"
import { Container, Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default ({ data }) => {
	console.log(data)
	let projectData = data.allProjectsJson.edges
	return (
		<Layout>
			<Container>
				<Row>
				{projectData.map(({ node }) => (
					<Col xs="12" lg="4">
						<Card>
							<Card.Img variant="top" src={node.img.path} alt={node.img.alt} />
							<Card.Body>
								<Card.Title>{node.name}</Card.Title>
								<Card.Text>{node.desc}</Card.Text>
								{node.links.map((link) => (
									<Button variant="primary" href={link.url}
										target="_blank" rel="noopener noreferrer">
										{link.text}
									</Button>
								))}
							</Card.Body>
						</Card>
					</Col>
				))}
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

