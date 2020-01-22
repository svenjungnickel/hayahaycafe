import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

jest.mock('../../src/components/Image');

describe('Header', () => {
    it('renders correctly', () => {
        const headerImage = 'headerImage';
        const title = 'title';
        const subtitle = 'subtitle';

        const component = <Header headerImage={headerImage} title={title} subtitle={subtitle} />;

        expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
});
