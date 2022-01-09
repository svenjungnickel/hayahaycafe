import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

export const HTMLHead = ({ globalMeta, title, description, keywords }) => {
    const lang = globalMeta.language || 'en';
    const newTitle = title || globalMeta.title;
    const metaTitle =
        newTitle === '' || newTitle === globalMeta.title ? globalMeta.title : `${newTitle} | ${globalMeta.title}`;
    const metaDescription = description || globalMeta.description;
    const metaKeywords = keywords || globalMeta.keywords;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={metaTitle}
            defer={false}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: metaTitle,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'keywords',
                    content: metaKeywords,
                },
            ]}
        >
            <link rel="preconnect dns-prefetch" href="https://fonts.googleapis.com" />
        </Helmet>
    );
};

HTMLHead.propTypes = {
    globalMeta: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
};

const SEO = (props) => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    meta {
                        title
                        description
                        keywords
                        language
                    }
                }
            }
        `}
        render={({ globalSettings }) => (
            <>{!!globalSettings && !!globalSettings.meta && <HTMLHead globalMeta={globalSettings.meta} {...props} />}</>
        )}
    />
);

export default SEO;
