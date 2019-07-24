module.exports = {
    // pathPrefix: "/gatsby-react-bootstrap-starter",
    siteMetadata: {
        title: `Hayahay Cafe`,
        description: `Locally Sourced - Crafted With Love`,
        author: `Sven Jungnickel <svenjungnickel@googlemail.com>`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hayahay Cafe`,
                short_name: `hayahay-cafe`,
                start_url: `/`,
                background_color: `#662721`,
                theme_color: `#d2a795`,
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        // This (optional) plugin enables Progressive Web App + Offline functionality.
        // The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the
        // created manifest.webmanifest
        `gatsby-plugin-offline`,
    ],
};
