import React from 'react';
import Helmet from 'react-helmet';
import { mount } from 'enzyme';
import { StaticQuery } from 'gatsby';
import SEO, { HTMLHead } from '../SEO';

describe('SEO', () => {
    it('renders without required globalMeta throws prop type error', () => {
        const renderSEO = () => {
            const title = 'title';
            const description = 'description';

            mount(<HTMLHead title={title} description={description} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

    it('renders without required title throws prop type error', () => {
        const renderSEO = () => {
            const globalMeta = {};
            const description = 'description';

            mount(<HTMLHead globalMeta={globalMeta} description={description} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

    it('renders without required description throws prop type error', () => {
        const renderSEO = () => {
            const globalMeta = {};
            const title = 'title';

            mount(<HTMLHead globalMeta={globalMeta} title={title} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid globalMeta throws prop type error', () => {
        const renderSEO = () => {
            const globalMeta = 'globalMeta';
            const title = 'title';
            const description = 'description';

            mount(<HTMLHead globalMeta={globalMeta} title={title} description={description} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderSEO = () => {
            const globalMeta = {};
            const title = 123;
            const description = 'description';

            mount(<HTMLHead globalMeta={globalMeta} title={title} description={description} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid description throws prop type error', () => {
        const renderSEO = () => {
            const globalMeta = {};
            const title = 'title';
            const description = 123;

            mount(<HTMLHead globalMeta={globalMeta} title={title} description={description} />);
        };

        expect(renderSEO).toThrowError('Warning: Failed prop type');
    });

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
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        mount(<SEO title={title} description={description} />);
        const helmet = Helmet.peek();

        const metaKeywords = helmet.metaTags.filter(item => item.name === 'keywords')[0].content;
        const metaDescription = helmet.metaTags.filter(item => item.name === 'description')[0].content;
        const metaOGTitle = helmet.metaTags.filter(item => item.property === 'og:title')[0].content;
        const metaOGDescription = helmet.metaTags.filter(item => item.property === 'og:description')[0].content;

        expect(helmet.title).toEqual(data.globalSettings.meta.title);
        expect(metaDescription).toEqual(data.globalSettings.meta.description);
        expect(metaKeywords).toEqual(data.globalSettings.meta.keywords);
        expect(metaOGTitle).toEqual(data.globalSettings.meta.title);
        expect(metaOGDescription).toEqual(data.globalSettings.meta.description);
        expect(helmet.htmlAttributes.lang).toEqual('en');
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
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        mount(<SEO title={title} description={description} keywords={keywords} />);
        const helmet = Helmet.peek();

        const metaKeywords = helmet.metaTags.filter(item => item.name === 'keywords')[0].content;
        const metaDescription = helmet.metaTags.filter(item => item.name === 'description')[0].content;
        const metaOGTitle = helmet.metaTags.filter(item => item.property === 'og:title')[0].content;
        const metaOGDescription = helmet.metaTags.filter(item => item.property === 'og:description')[0].content;

        const expectedTitle = `${title} | ${data.globalSettings.meta.title}`;
        expect(helmet.title).toEqual(expectedTitle);
        expect(metaDescription).toEqual(description);
        expect(metaKeywords).toEqual(keywords);
        expect(metaOGTitle).toEqual(expectedTitle);
        expect(metaOGDescription).toEqual(description);
        expect(helmet.htmlAttributes.lang).toEqual(data.globalSettings.meta.language);
    });
});
