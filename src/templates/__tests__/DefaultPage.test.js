import React from 'react';
import renderer from 'react-test-renderer';
import DefaultPage, { DefaultPageTemplate } from '../DefaultPage';
import { HTMLContent } from '../../components/Content';
import DefaultPageData from '../../__fixtures__/DefaultPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');

describe('DefaultPageTemplate', () => {
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
    it('renders correctly', () => {
        const data = {
            page: {
                html: <p>HTML</p>,
                frontmatter: DefaultPageData,
            },
        };

        const component = <DefaultPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
