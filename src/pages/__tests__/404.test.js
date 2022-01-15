import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../404';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');

describe('404', () => {
    it('renders correctly', () => {
        const data = {
            headerImage: 'headerImage',
        };

        const component = <NotFoundPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
