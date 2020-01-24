import React from 'react';
import renderer from 'react-test-renderer';
import Content, { HTMLContent } from '../Content';

describe('Content', () => {
    it('renders content', () => {
        const content = 'Content';

        const component = <Content content={content} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders classname', () => {
        const className = 'className';

        const component = <Content className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders content and classname', () => {
        const content = 'Content';
        const className = 'className';

        const component = <Content content={content} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with invalid content throws prop type error', () => {
        const renderContent = () => {
            const content = {};

            const component = <Content content={content} />;
            renderer.create(component);
        };

        expect(renderContent).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid className throws prop type error', () => {
        const renderContent = () => {
            const content = 'Content';
            const className = 123;

            const component = <Content content={content} className={className} />;
            renderer.create(component);
        };

        expect(renderContent).toThrowError('Warning: Failed prop type');
    });
});

describe('HTMLContent', () => {
    it('renders content', () => {
        const content = '<p>HTMLContent</p>';

        const component = <HTMLContent content={content} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders classname', () => {
        const className = 'className';

        const component = <HTMLContent className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders content and classname', () => {
        const content = '<p>HTMLContent</p>';
        const className = 'className';

        const component = <HTMLContent content={content} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with invalid content throws prop type error', () => {
        const renderHTMLContent = () => {
            const content = {};

            const component = <HTMLContent content={content} />;
            renderer.create(component);
        };

        expect(renderHTMLContent).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid className throws prop type error', () => {
        const renderHTMLContent = () => {
            const content = '<p>HTMLContent</p>';
            const className = 123;

            const component = <HTMLContent content={content} className={className} />;
            renderer.create(component);
        };

        expect(renderHTMLContent).toThrowError('Warning: Failed prop type');
    });
});
