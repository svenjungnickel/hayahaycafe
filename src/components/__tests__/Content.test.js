import React from 'react';
import { render } from '@testing-library/react';
import Content, { HTMLContent } from '../Content';

describe('Content', () => {
    it('renders content', () => {
        const content = 'Content';

        const component = <Content content={content} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders classname', () => {
        const className = 'className';

        const component = <Content className={className} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders content and classname', () => {
        const content = 'Content';
        const className = 'className';

        const component = <Content content={content} className={className} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});

describe('HTMLContent', () => {
    it('renders content', () => {
        const content = <div>HTMLContent</div>;

        const component = <HTMLContent content={content} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders classname', () => {
        const className = 'className';

        const component = <HTMLContent className={className} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders content and classname', () => {
        const content = <div>HTMLContent</div>;
        const className = 'className';

        const component = <HTMLContent content={content} className={className} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
