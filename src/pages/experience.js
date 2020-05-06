import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

export default ({ data }) => {
	let experienceData = data.allExperienceJson.edges
	return (
		<Layout>
			<Container>
			{experienceData.map(({ node }) => (
				<Row>
					<ListGroup>
						<ListGroup.Item>
							<Row>
								<Col lg="3">
									<Image src={node.img.path} alt={node.img.alt}
										height="200px" width="200px"
										rounded fluid className="mx-auto d-lg-block"/>
								</Col>
								<Col lg="9">
									<h2>{node.company}</h2>
									<h3>{node.title}</h3>
									<h5>{node.duration}</h5>
								{node.desc.map( line => (
									<p className="text-justify">
										{line}
									</p>
								))}
								{node.links.map( link => (
									<Button variant="primary" href={link.url}
										target="_blank" rel="noopener noreferrer">
										{link.text}
									</Button>
								))}
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
				</Row>
			))}
			</Container>
		</Layout>
	)
}

export const query = graphql`
query ExperienceQuery {
  allExperienceJson {
    edges {
      node {
        desc
        img {
          alt
          path
        }
        company
        duration
        title
        links {
          text
          url
        }
      }
    }
  }
}
`

