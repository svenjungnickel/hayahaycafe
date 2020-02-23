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
    it('renders without title throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';

            const component = <ContactPageTemplate subtitle={subtitle} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without subtitle throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';

            const component = <ContactPageTemplate title={title} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without headerImage throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';

            const component = <ContactPageTemplate title={title} subtitle={subtitle} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 123;
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';

            const component = <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid subtitle throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const subtitle = 123;
            const headerImage = 'headerImage';

            const component = <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 123;

            const component = <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} />;
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid content throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = {};

            const component = (
                <ContactPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
            );
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid contentComponent throws prop type error', () => {
        const renderContactPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const contentComponent = false;

            const component = (
                <ContactPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    contentComponent={contentComponent}
                />
            );
            renderer.create(component);
        };

        expect(renderContactPageTemplate).toThrowError('Warning: Failed prop type');
    });

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
    it('renders without data throws prop type error', () => {
        const renderContactPage = () => {
            const component = <ContactPage />;
            renderer.create(component);
        };

        expect(renderContactPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderContactPage = () => {
            const data = {};

            const component = <ContactPage data={data} />;
            renderer.create(component);
        };

        expect(renderContactPage).toThrowError('Warning: Failed prop type');
    });

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
