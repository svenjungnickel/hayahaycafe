import React from 'react';
import renderer from 'react-test-renderer';
import { getSrc } from 'gatsby-plugin-image';
import GalleryPage, { GalleryPageTemplate } from '../GalleryPage';
import { HTMLContent } from '../../components/Content';
import GalleryPageData from '../../__fixtures__/GalleryPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');
jest.mock('../../components/Separator');
jest.mock('../../components/Image');

describe('GalleryPageTemplate', () => {
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

    it('renders GatsbyImage', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const images = [{ src: { publicURL: 'publicURL' } }];

        getSrc.mockImplementation(() => true);

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
