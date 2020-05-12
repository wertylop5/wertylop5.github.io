import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

export default ({ data }) => {
	let clubData = data.allClubsJson.edges
	return (
		<Layout>
			<title>Experience</title>
			<Container>
			{clubData.map(({ node }) => (
				<Row>
					<Col>
						<ListGroup>
							<ListGroup.Item>
								<Row>
									<Col lg="3">
										<Image src={node.img.path} alt={node.img.alt}
											height="200px" width="200px"
											rounded fluid className="mx-auto d-lg-block"/>
									</Col>
									<Col lg="9">
										<h2>{node.name}</h2>
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
					</Col>
				</Row>
			))}
			</Container>
		</Layout>
	)
}

export const query = graphql`
query ClubQuery {
  allClubsJson {
    edges {
      node {
        desc
        img {
          alt
          path
        }
        name
        links {
          text
          url
        }
      }
    }
  }
}
`

