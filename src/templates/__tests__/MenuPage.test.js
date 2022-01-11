import React from 'react';
import renderer from 'react-test-renderer';
import { getSrc } from 'gatsby-plugin-image';
import MenuPage, { MenuPageTemplate } from '../MenuPage';
import { HTMLContent } from '../../components/Content';
import MenuPageData from '../../__fixtures__/MenuPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');
jest.mock('../../components/Separator');
jest.mock('../../components/Image');

describe('MenuPageTemplate', () => {
    it('renders without title throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <MenuPageTemplate subtitle={subtitle} headerImage={headerImage} content={content} images={images} />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without subtitle throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <MenuPageTemplate title={title} headerImage={headerImage} content={content} images={images} />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without headerImage throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const content = 'content';
            const images = [{}];

            const component = <MenuPageTemplate title={title} subtitle={subtitle} content={content} images={images} />;
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without content throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const images = [{}];

            const component = (
                <MenuPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} images={images} />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without images throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';

            const component = (
                <MenuPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 123;
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid subtitle throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 123;
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 123;
            const content = 'content';
            const images = [{}];

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid content throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = {};
            const images = [{}];

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid contentComponent throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const contentComponent = false;
            const images = [{}];

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    contentComponent={contentComponent}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid images throws prop type error', () => {
        const renderMenuPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = false;

            const component = (
                <MenuPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderMenuPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [{}];

        const component = (
            <MenuPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                images={images}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders html content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = <p>HTML content</p>;
        const images = [{}];

        const component = (
            <MenuPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                contentComponent={HTMLContent}
                images={images}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders GatsbyImage', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [{ src: { publicURL: 'publicURL' } }];

        getSrc.mockImplementation(() => true);

        const component = (
            <MenuPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                images={images}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('MenuPage', () => {
    it('renders without data throws prop type error', () => {
        const renderStartPage = () => {
            const component = <MenuPage />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderStartPage = () => {
            const data = {};

            const component = <MenuPage data={data} />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const data = {
            page: {
                html: <p>HTML</p>,
                frontmatter: MenuPageData,
            },
        };

        const component = <MenuPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
