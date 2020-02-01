import React from 'react';
import renderer from 'react-test-renderer';
import StartPage, { StartPageTemplate } from '../StartPage';
import { HTMLContent } from '../../components/Content';
import StartPageData from '../../__fixtures__/StartPageData';

jest.mock('../../components/Layout');
jest.mock('../../components/Image');
jest.mock('../../components/Gallery');
jest.mock('../../components/Header');
jest.mock('../../components/Location/Location');
jest.mock('../../components/Separator');
jest.mock('../../components/OpeningHours');
jest.mock('../../components/What3WordsAddress');

describe('StartPageTemplate', () => {
    it('renders without title throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate subtitle={subtitle} headerImage={headerImage} content={content} gallery={gallery} />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without subtitle throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const headerImage = 'headerImage';
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate title={title} headerImage={headerImage} content={content} gallery={gallery} />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without headerImage throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate title={title} subtitle={subtitle} content={content} gallery={gallery} />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without content throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const gallery = [{}];

            const component = (
                <StartPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} gallery={gallery} />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders without gallery throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';

            const component = (
                <StartPageTemplate title={title} subtitle={subtitle} headerImage={headerImage} content={content} />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 123;
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid subtitle throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 123;
            const headerImage = 'headerImage';
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 123;
            const content = 'content';
            const gallery = [{}];

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid content throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = {};
            const gallery = [{}];

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid contentComponent throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const contentComponent = false;
            const gallery = [{}];

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    contentComponent={contentComponent}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid gallery throws prop type error', () => {
        const renderStartPageTemplate = () => {
            const title = 'title';
            const subtitle = 'subtitle';
            const headerImage = 'headerImage';
            const content = 'content';
            const gallery = false;

            const component = (
                <StartPageTemplate
                    title={title}
                    subtitle={subtitle}
                    headerImage={headerImage}
                    content={content}
                    gallery={gallery}
                />
            );
            renderer.create(component);
        };

        expect(renderStartPageTemplate).toThrowError('Warning: Failed prop type');
    });

    it('renders content correctly', () => {
        const title = 'title';
        const subtitle = 'subtitle';
        const headerImage = 'headerImage';
        const content = 'content';
        const gallery = [{}];

        const component = (
            <StartPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                gallery={gallery}
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
        const gallery = [{}];

        const component = (
            <StartPageTemplate
                title={title}
                subtitle={subtitle}
                headerImage={headerImage}
                content={content}
                contentComponent={HTMLContent}
                gallery={gallery}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('StartPage', () => {
    it('renders without data throws prop type error', () => {
        const renderStartPage = () => {
            const component = <StartPage />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderStartPage = () => {
            const data = {};

            const component = <StartPage data={data} />;
            renderer.create(component);
        };

        expect(renderStartPage).toThrowError('Warning: Failed prop type');
    });

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
