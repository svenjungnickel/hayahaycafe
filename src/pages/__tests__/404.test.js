import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../404';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');

describe('404', () => {
    it('renders without data throws prop type error', () => {
        const renderNotFoundPage = () => {
            const component = <NotFoundPage />;
            renderer.create(component);
        };

        expect(renderNotFoundPage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid data throws prop type error', () => {
        const renderNotFoundPage = () => {
            const data = {};

            const component = <NotFoundPage data={data} />;
            renderer.create(component);
        };

        expect(renderNotFoundPage).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const data = {
            headerImage: 'headerImage',
        };

        const component = <NotFoundPage data={data} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
