import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

jest.mock('../Image');

describe('Header', () => {
    it('renders without subtitle', () => {
        const headerImage = 'headerImage';
        const title = 'title';

        const component = <Header headerImage={headerImage} title={title} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders with subtitle', () => {
        const headerImage = 'headerImage';
        const title = 'title';
        const subtitle = 'subtitle';

        const component = <Header headerImage={headerImage} title={title} subtitle={subtitle} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
