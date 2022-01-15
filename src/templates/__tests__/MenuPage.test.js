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
