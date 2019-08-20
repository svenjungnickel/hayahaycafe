module.exports = {
    // pathPrefix: "/gatsby-react-bootstrap-starter",
    siteMetadata: {
        title: 'Hayahay Cafe',
        description: 'Locally Sourced - Crafted With Love',
        author: 'Sven Jungnickel <svenjungnickel@googlemail.com>',
        address: 'Hayahay Cafe, Bug-ong, Mambajao, Camiguin 9100, Philippines',
        email: 'hayahaycafe@gmail.com',
        socialMedia: [
            {
                type: 'instagram',
                link: 'https://www.instagram.com/hayahaycafe/',
            },
            {
                type: 'facebook',
                link: 'https://www.facebook.com/hayahaycafesacamiguin/',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/assets/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hayahay Cafe`,
                short_name: `hayahay-cafe`,
                start_url: `/`,
                background_color: `#662721`,
                theme_color: `#d2a795`,
                display: `standalone`,
                icon: `assets/icon.png`, // This path is relative to the root of the site.
            },
        },
        // This (optional) plugin enables Progressive Web App + Offline functionality.
        // The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the
        // created manifest.webmanifest
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                /**
                 * One convention is to place your Netlify CMS customization code in a
                 * `src/cms` directory.
                 */
                modulePath: `${__dirname}/src/cms/cms.js`,
                enableIdentityWidget: true,
                htmlTitle: `Hayahay Cafe - Admin`,
            },
        },
    ],
};
