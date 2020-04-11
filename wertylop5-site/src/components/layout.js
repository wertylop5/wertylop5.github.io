import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import layoutStyles from "../styles/layout.module.css"

export default ({ children }) => {
	return (
		<div className={layoutStyles.layout}>
			<Link to="/">
				<h3> Stanley Lin </h3>
			</Link>
				{children}
		</div>
	)
}
