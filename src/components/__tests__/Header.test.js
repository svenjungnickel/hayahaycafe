import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

jest.mock('../Image');

describe('Header', () => {
    it('renders without subtitle', () => {
        const headerImage = 'headerImage';
        const title = 'title';

        const component = <Header headerImage={headerImage} title={title} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with subtitle', () => {
        const headerImage = 'headerImage';
        const title = 'title';
        const subtitle = 'subtitle';

        const component = <Header headerImage={headerImage} title={title} subtitle={subtitle} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
