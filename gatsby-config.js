/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Stanley Lin",
		siteUrl: "https://wertylop5.github.io/",
		description: "Personal website"
	},
	plugins: [
		/*
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		*/
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "pages",
				path: `${__dirname}/src/pages/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
				ignore: [`**/\.*`]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static`
			}
		},
		/*
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/static`
			}
		},
		*/
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 500
						}
					}
				]
			}
		},
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`
	]
}
