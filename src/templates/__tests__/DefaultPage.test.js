import React from 'react';
import { render } from '@testing-library/react';
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
        const tree = render(component).asFragment();

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
        const tree = render(component).asFragment();

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
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
