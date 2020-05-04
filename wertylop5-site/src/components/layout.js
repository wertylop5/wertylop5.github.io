import React from "react"
import { Link } from "gatsby"
import { typography, rhythm } from "../utils/typography"
import layoutStyles from "../styles/layout.module.css"
import { TypographyStyle } from "react-typography"

import Button from "react-bootstrap/Button"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Container from "react-bootstrap/Container"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default ({ children }) => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="md">
				<Navbar.Brand href="/">Stanley Lin</Navbar.Brand>
				<Navbar.Toggle aria-controls="mainNavbar" />
				
				<Navbar.Collapse className="justify-content-between" id="mainNavbar">
					<Nav>
						<Nav.Link href="/projects/">Projects</Nav.Link>
						
						<Nav.Link href="/experience/">Experience</Nav.Link>
						
						<NavDropdown title="Socials" className="d-md-none">
							<NavDropdown.Item href="https://github.com/wertylop5">
								<FaGithub />
								Github
							</NavDropdown.Item>
							<NavDropdown.Item href="https://linkedin.com/in/slin55055">
								<FaLinkedinIn />
								LinkedIn
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className="d-md-flex d-none">
						<Nav.Link className="nav-link" href="https://github.com/wertylop5">
							<FaGithub />
						</Nav.Link>
						
						<Nav.Link className="nav-link" href="https://linkedin.com/in/slin55055">
							<FaLinkedinIn />
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
