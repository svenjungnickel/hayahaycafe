/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description, keywords }) {
    const { globalSettings } = useStaticQuery(
        graphql`
            query GlobalSettings {
                globalSettings: settingsYaml {
                    meta {
                        title
                        description
                        keywords
                        language
                    }
                }
            }
        `
    );

    const lang = globalSettings.meta.language || 'en';
    const metaTitle = title || globalSettings.meta.title;
    const metaDescription = description || globalSettings.meta.description;
    const metaKeywords = keywords || globalSettings.meta.keywords;
    const titleTemplate =
        title === '' || title === globalSettings.meta.title
            ? globalSettings.meta.title
            : `%s | ${globalSettings.meta.title}`;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={titleTemplate}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `keywords`,
                    content: metaKeywords,
                },
            ]}
        />
    );
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
};

export default SEO;
