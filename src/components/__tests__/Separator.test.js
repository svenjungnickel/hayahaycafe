import React from 'react';
import renderer from 'react-test-renderer';
import Separator from '../Separator';

describe('Separator', () => {
    it('renders with invalid className throws prop type error', () => {
        const renderSeparator = () => {
            const className = 123;

            const component = <Separator className={className} />;
            renderer.create(component);
        };

        expect(renderSeparator).toThrowError('Warning: Failed prop type');
    });

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
