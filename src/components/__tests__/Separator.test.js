import React from 'react';
import { render } from '@testing-library/react';
import Separator from '../Separator';

describe('Separator', () => {
    it('renders without className', () => {
        const component = <Separator />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders with className', () => {
        const className = 'className';

        const component = <Separator className={className} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
