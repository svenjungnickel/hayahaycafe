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

    it('renders without any required fields throws prop type error', () => {
        const renderHeader = () => {
            const component = <Header />;
            renderer.create(component);
        };

        expect(renderHeader).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid headerImage throws prop type error', () => {
        const renderHeader = () => {
            const headerImage = Array;
            const title = 'title';

            const component = <Header headerImage={headerImage} title={title} />;
            renderer.create(component);
        };

        expect(renderHeader).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid title throws prop type error', () => {
        const renderHeader = () => {
            const headerImage = 'headerImage';
            const title = 123;

            const component = <Header headerImage={headerImage} title={title} />;
            renderer.create(component);
        };

        expect(renderHeader).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid subtitle throws prop type error', () => {
        const renderHeader = () => {
            const headerImage = 'headerImage';
            const title = 'title';
            const subtitle = 123;

            const component = <Header headerImage={headerImage} title={title} subtitle={subtitle} />;
            renderer.create(component);
        };

        expect(renderHeader).toThrowError('Warning: Failed prop type');
    });
});
