import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar';

jest.mock('../NavItem');
jest.mock('../DarkModeToggle');

describe('NavBar', () => {
    it('renders without currentPage throws prop type error', () => {
        const renderNavBar = () => {
            const component = <NavBar />;
            renderer.create(component);
        };

        expect(renderNavBar).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid currentPage throws prop type error', () => {
        const renderNavBar = () => {
            const currentPage = 123;

            const component = <NavBar currentPage={currentPage} />;
            renderer.create(component);
        };

        expect(renderNavBar).toThrowError('Warning: Failed prop type');
    });

    it('renders with disabled dark mode (default)', () => {
        const currentPage = '/';

        const component = <NavBar currentPage={currentPage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
