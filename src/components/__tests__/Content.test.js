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
});

describe('HTMLContent', () => {
    it('renders content', () => {
        const content = <div>HTMLContent</div>;

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
        const content = <div>HTMLContent</div>;
        const className = 'className';

        const component = <HTMLContent content={content} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
