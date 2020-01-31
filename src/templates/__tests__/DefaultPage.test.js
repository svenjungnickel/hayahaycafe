import React from 'react';
import renderer from 'react-test-renderer';
import DefaultPage, { DefaultPageTemplate } from '../DefaultPage';
import { HTMLContent } from '../../components/Content';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');

describe('DefaultPageTemplate', () => {
    it('renders without title throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const headerImage = 'headerImage';
            const content = 'content';

            const component = <DefaultPageTemplate headerImage={headerImage} content={content} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without headerImage throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const title = 'title';
            const content = 'content';

            const component = <DefaultPageTemplate title={title} content={content} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without content throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';

            const component = <DefaultPageTemplate title={title} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const title = 123;
            const headerImage = 'headerImage';
            const content = 'content';

            const component = <DefaultPageTemplate title={title} headerImage={headerImage} content={content} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const title = 'title';
            const headerImage = 123;
            const content = 'content';

            const component = <DefaultPageTemplate title={title} headerImage={headerImage} content={content} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid content throws prop type error', () => {
        const renderDefaultPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';
            const content = {};

            const component = <DefaultPageTemplate title={title} headerImage={headerImage} content={content} />;
            renderer.create(component);
        };

        expect(renderDefaultPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders content correctly', () => {
        const title = 'title';
        const headerImage = 'headerImage';
        const content = 'content';

        const component = <DefaultPageTemplate title={title} headerImage={headerImage} content={content} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders html content correctly', () => {
        const title = 'title';
        const headerImage = 'headerImage';
        const content = <p>Html content</p>;

        const component = (
            <DefaultPageTemplate
                title={title}
                headerImage={headerImage}
                content={content}
                contentComponent={HTMLContent}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('DefaultPage', () => {
    it('renders without data throws prop type error', () => {
        const renderDefaultPage = () => {
            const component = <DefaultPage />;
            renderer.create(component);
        };

        expect(renderDefaultPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderDefaultPage = () => {
            const data = {};

            const component = <DefaultPage data={data} />;
            renderer.create(component);
        };

        expect(renderDefaultPage).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const data = {
            page: {
                html: <p>HTML</p>,
                frontmatter: {
                    slug: 'slug',
                    title: 'title',
                    subtitle: 'subtitle',
                    headerImage: {
                        publicURL: 'publicURL',
                    },
                    meta: {
                        title: 'meta title',
                        description: 'meta description.',
                        keywords: 'meta keywords',
                    },
                },
            },
        };

        const component = <DefaultPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
