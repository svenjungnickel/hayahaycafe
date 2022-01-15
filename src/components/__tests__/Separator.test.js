import React from 'react';
import renderer from 'react-test-renderer';
import Separator from '../Separator';

describe('Separator', () => {
    it('renders without className', () => {
        const component = <Separator />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with className', () => {
        const className = 'className';

        const component = <Separator className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
