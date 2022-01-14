import React from 'react';
import renderer from 'react-test-renderer';
import ContactPage, { ContactPageTemplate } from '../ContactPage';
import { HTMLContent } from '../../components/Content';
import ContactPageData from '../../__fixtures__/ContactPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');
jest.mock('../../components/ContactForm/ContactForm');
jest.mock('../../components/Separator');

describe('ContactPageTemplate', () => {
    it('renders without content', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';

        const component = <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with content', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';

        const component = (
            <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with html content', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = <p>HTML content</p>;

        const component = (
            <ContactPageTemplate
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

describe('ContactPage', () => {
    it('renders correctly', () => {
        const data = {
            page: {
                html: '',
                frontmatter: ContactPageData,
            },
        };

        const component = <ContactPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
