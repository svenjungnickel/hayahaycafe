import React from 'react';
import renderer from 'react-test-renderer';
import StartPage, { StartPageTemplate } from '../StartPage';
import { HTMLContent } from '../../components/Content';
import StartPageData from '../../__fixtures__/StartPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Image');
jest.mock('../../components/Header');
jest.mock('../../components/Location/Location');
jest.mock('../../components/Separator');
jest.mock('../../components/OpeningHours');
jest.mock('../../components/What3WordsAddress');

describe('StartPageTemplate', () => {
    it('renders content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';

        const component = (
            <StartPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders html content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = <p>HTML content</p>;

        const component = (
            <StartPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                contentComponent={HTMLContent}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('StartPage', () => {
    it('renders correctly', () => {
        const data = {
            page: {
                html: <p>HTML</p>,
                frontmatter: StartPageData,
            },
        };

        const component = <StartPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
