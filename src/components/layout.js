import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { typography, rhythm } from "../utils/typography"
import layoutStyles from "../styles/layout.module.css"
import { TypographyStyle } from "react-typography"

import Button from "react-bootstrap/Button"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Container from "react-bootstrap/Container"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"

/*
 * Using the as={Link} attribute to take advantage of Gatsby's fast Link API
 *
 * The activeClassName value takes advantage of how Bootstrap uses the class "active"
 * to highlight a link
 */
export default ({ children }) => {
	const data = useStaticQuery(graphql`
	query layoutQuery {
	  site {
		siteMetadata {
		  title
		}
	  }
	}
	`)
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="md">
				<Navbar.Brand as={Link} to="/">{data.site.siteMetadata.title}</Navbar.Brand>
				<Navbar.Toggle aria-controls="mainNavbar" />
				
				<Navbar.Collapse className="justify-content-between" id="mainNavbar">
					<Nav>
						<Nav.Link as={Link} to="/projects/"
							activeClassName="active">Projects</Nav.Link>
						
						<Nav.Link as={Link} to="/experience/"
							activeClassName="active">Experience</Nav.Link>
						
						<Nav.Link as={Link} to="/clubs/"
							activeClassName="active">Clubs (College)</Nav.Link>
						
						<NavDropdown title="Socials" className="d-md-none">
							<NavDropdown.Item href="https://github.com/wertylop5"
								target="_blank" rel="noopener noreferrer">
								<FaGithub />
								Github
							</NavDropdown.Item>
							<NavDropdown.Item href="https://linkedin.com/in/slin55055"
								target="_blank" rel="noopener noreferrer">
								<FaLinkedinIn />
								LinkedIn
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className="d-md-flex d-none">
						<Nav.Link href="https://github.com/wertylop5"
							target="_blank" rel="noopener noreferrer">
							<FaGithub size="1.5em" />
						</Nav.Link>
						
						<Nav.Link href="https://linkedin.com/in/slin55055"
							target="_blank" rel="noopener noreferrer">
							<FaLinkedinIn size="1.5em" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				{ children }
			</Container>
		</div>
	)
}
