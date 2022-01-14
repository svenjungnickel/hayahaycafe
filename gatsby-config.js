module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-use-dark-mode',
        'gatsby-transformer-yaml',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
                anonymize: true,
                exclude: ['/admin/**'],
            },
        },

        // Add static assets before markdown files
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `${__dirname}/assets/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            },
        },

        // images
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    formats: ['auto', 'webp', 'avif'],
                    placeholder: 'blurred',
                    loading: 'lazy',
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    // gatsby-remark-relative-images must
                    // go before gatsby-remark-images
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'images', // Must match the source name
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1600,
                            backgroundColor: 'transparent', // required to display blurred image first
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-image',

        // pwa
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Hayahay Cafe',
                short_name: 'hayahay-cafe',
                start_url: '/',
                background_color: '#662721',
                theme_color: '#d2a795',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'assets/hayahay.png', // This path is relative to the root of the site.
            },
        },
        // This (optional) plugin enables Progressive Web App + Offline functionality.
        // The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the
        // created manifest.webmanifest
        'gatsby-plugin-offline',

        // netlify cms
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                /**
                 * One convention is to place your Netlify CMS customization code in a
                 * `src/cms` directory.
                 */
                modulePath: `${__dirname}/src/cms/cms.js`,
                enableIdentityWidget: true,
                htmlTitle: 'Hayahay Cafe - Admin',
                logo: 'assets/logo.png',
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
