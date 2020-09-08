const groupBy = require('lodash/groupBy');
const each = require('lodash/each');
const get = require('lodash/get');
const kebabCase = require('lodash/kebabCase');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        frontmatter {
                            template
                            title
                        }
                        fields {
                            slug
                            contentType
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        const mdFiles = result.data.allMarkdownRemark.edges;

        const contentTypes = groupBy(mdFiles, 'node.fields.contentType');

        each(contentTypes, (pages, contentType) => {
            const pagesToCreate = pages.filter((page) =>
                // get pages with template field
                get(page, 'node.frontmatter.template')
            );
            if (!pagesToCreate.length) return console.log(`Skipping ${contentType}`);

            console.log(`Creating ${pagesToCreate.length} ${contentType}`);

            pagesToCreate.forEach((page) => {
                const id = page.node.id;
                createPage({
                    // page slug set in md frontmatter
                    path: page.node.fields.slug,
                    component: path.resolve(`src/templates/${String(page.node.frontmatter.template)}.js`),
                    // additional data can be passed via context
                    context: {
                        id,
                    },
                });
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    // Create smart slugs
    // https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
    let slug;
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);

        if (get(node, 'frontmatter.slug')) {
            slug = `/${node.frontmatter.slug.toLowerCase()}/`;
        } else if (
            // home page gets root slug
            parsedFilePath.name === 'start' &&
            parsedFilePath.dir === 'pages'
        ) {
            slug = '/';
        } else if (get(node, 'frontmatter.title')) {
            slug = `/${kebabCase(parsedFilePath.dir)}/${kebabCase(node.frontmatter.title)}/`;
        } else if (parsedFilePath.dir === '') {
            slug = `/${parsedFilePath.name}/`;
        } else {
            slug = `/${parsedFilePath.dir}/`;
        }

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });

        // Add contentType to node.fields
        createNodeField({
            node,
            name: 'contentType',
            value: parsedFilePath.dir,
        });
    }
};

// Random fix for https://github.com/gatsbyjs/gatsby/issues/5700
module.exports.resolvableExtensions = () => ['.json'];
