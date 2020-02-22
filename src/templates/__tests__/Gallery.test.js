import React from 'react';
import renderer from 'react-test-renderer';
import GalleryPage, { GalleryPageTemplate } from '../GalleryPage';
import { HTMLContent } from '../../components/Content';
import { childImageSharpFluid, childImageSharpFixed } from '../../__fixtures__/Images';
import GalleryPageData from '../../__fixtures__/GalleryPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');
jest.mock('../../components/Separator');
jest.mock('../../components/Image');

describe('GalleryPageTemplate', () => {
    it('renders without title throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate subtitle={subtitle} headerImage={headerImage} content={content} images={images} />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without subtitle throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate title={title} headerImage={headerImage} content={content} images={images} />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without headerImage throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate title={title} subtitle={subtitle} content={content} images={images} />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without content throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const images = [{}];

            const component = (
                <GalleryPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} images={images} />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without images throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';

            const component = (
                <GalleryPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 123;
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid subtitle throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 123;
            const headerImage = 'headerImage';
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 123;
            const content = 'content';
            const images = [{}];

            const component = (
                <GalleryPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid content throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = {};
            const images = [{}];

            const component = (
                <GalleryPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid contentComponent throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const contentComponent = false;
            const images = [{}];

            const component = (
                <GalleryPageTemplate
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

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid images throws prop type error', () => {
        const renderGalleryPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const images = false;

            const component = (
                <GalleryPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    images={images}
                />
            );
            renderer.create(component);
        };

        expect(renderGalleryPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [{}];

        const component = (
            <GalleryPageTemplate
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
            <GalleryPageTemplate
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

    it('renders childImageSharp fluid', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [
            {
                src: childImageSharpFluid,
            },
        ];

        const component = (
            <GalleryPageTemplate
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

    it('renders childImageSharp fixe', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [
            {
                src: childImageSharpFixed,
            },
        ];

        const component = (
            <GalleryPageTemplate
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

describe('GalleryPage', () => {
    it('renders without data throws prop type error', () => {
        const renderStartPage = () => {
            const component = <GalleryPage />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderStartPage = () => {
            const data = {};

            const component = <GalleryPage data={data} />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const data = {
            page: {
                html: <p>HTML</p>,
                frontmatter: GalleryPageData,
            },
        };

        const component = <GalleryPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
