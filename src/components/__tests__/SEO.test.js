import React from 'react';
import Helmet from 'react-helmet';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import SEO from '../SEO';

const renderWithHelmet = (ui) => {
    const previousCanUseDOM = Helmet.canUseDOM;
    Helmet.canUseDOM = false;
    render(ui);
    const helmet = Helmet.renderStatic();
    Helmet.canUseDOM = previousCanUseDOM;
    return helmet;
};

const getHelmetMetaContent = (helmet, key, value) => {
    if (!helmet.meta || !helmet.meta.toComponent) {
        return undefined;
    }

    const metaTags = helmet.meta.toComponent();
    const match = metaTags.find((tag) => tag.props && tag.props[key] === value);
    return match ? match.props.content : undefined;
};

const getHelmetTitle = (helmet) => {
    if (!helmet.title || !helmet.title.toComponent) {
        return '';
    }

    const titleTags = helmet.title.toComponent();
    return titleTags.length ? titleTags[0].props.children : '';
};

const getHelmetHtmlLang = (helmet) => {
    if (!helmet.htmlAttributes || !helmet.htmlAttributes.toComponent) {
        return undefined;
    }

    const attrs = helmet.htmlAttributes.toComponent();
    return attrs.lang;
};

describe('SEO', () => {
    // Jest snapshot tests are not working here because Helmet is not getting rendered via react-test-renderer.
    // To test Helmet, we have to actual mount Helmet, use Helmet.peek() to get the markup content and verify every
    // field by hand.
    it('renders default props', () => {
        const title = '';
        const description = '';
        const data = {
            globalSettings: {
                meta: {
                    title: 'title2',
                    description: 'description',
                    keywords: 'keywords',
                    language: '',
                },
            },
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const helmet = renderWithHelmet(<SEO title={title} description={description} />);

        const metaKeywords = getHelmetMetaContent(helmet, 'name', 'keywords');
        const metaDescription = getHelmetMetaContent(helmet, 'name', 'description');
        const metaOGTitle = getHelmetMetaContent(helmet, 'property', 'og:title');
        const metaOGDescription = getHelmetMetaContent(helmet, 'property', 'og:description');

        expect(getHelmetTitle(helmet)).toEqual(data.globalSettings.meta.title);
        expect(metaDescription).toEqual(data.globalSettings.meta.description);
        expect(metaKeywords).toEqual(data.globalSettings.meta.keywords);
        expect(metaOGTitle).toEqual(data.globalSettings.meta.title);
        expect(metaOGDescription).toEqual(data.globalSettings.meta.description);
        expect(getHelmetHtmlLang(helmet)).toEqual('en');
    });

    it('renders given props', () => {
        const title = 'title1';
        const description = 'description';
        const keywords = 'keywords';
        const data = {
            globalSettings: {
                meta: {
                    title: 'title2',
                    description: 'description',
                    keywords: 'keywords',
                    language: 'en',
                },
            },
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const helmet = renderWithHelmet(<SEO title={title} description={description} keywords={keywords} />);

        const metaKeywords = getHelmetMetaContent(helmet, 'name', 'keywords');
        const metaDescription = getHelmetMetaContent(helmet, 'name', 'description');
        const metaOGTitle = getHelmetMetaContent(helmet, 'property', 'og:title');
        const metaOGDescription = getHelmetMetaContent(helmet, 'property', 'og:description');

        const expectedTitle = `${title} | ${data.globalSettings.meta.title}`;
        expect(getHelmetTitle(helmet)).toEqual(expectedTitle);
        expect(metaDescription).toEqual(description);
        expect(metaKeywords).toEqual(keywords);
        expect(metaOGTitle).toEqual(expectedTitle);
        expect(metaOGDescription).toEqual(description);
        expect(getHelmetHtmlLang(helmet)).toEqual(data.globalSettings.meta.language);
    });
});
