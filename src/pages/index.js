import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"

import { BsPersonFill } from "react-icons/bs"
import { FaCode } from "react-icons/fa"
import { MdWork } from "react-icons/md"

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
				<br />
				<Row className="justify-content-center">
					<Col xs="auto">
							<h3>A summary about me</h3>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="text-center">
						<BsPersonFill size="10em" />
						<p>
							I’m currently a sophomore majoring in computer science and minoring in Electrical and Computer Engineering at Cornell University
						</p>
					</Col>
					<Col md={4} className="text-center">
						<FaCode size="10em" />
						<p>Some languages and libraries I've used are: Python, Javascript, Java, React.js, Bootstrap, C, HTML, CSS, Node.js, Flask, Android, Flutter, Kotlin, C++, SQL, MongoDB</p>
					</Col>
					<Col md={4} className="text-center">
						<MdWork size="10em" />
						<p>I've worked on an autonomous vehicle at Uber, done research with robotics and computer vision, and built a semiautonomous lab robot</p>
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
