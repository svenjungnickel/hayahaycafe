import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import NavBar from '../NavBar';
import LogoQueryData from '../__fixtures__/LogoQueryData';

jest.mock('../Logo');
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
        StaticQuery.mockImplementationOnce(({ render }) => render(LogoQueryData));

        const component = <NavBar currentPage={currentPage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    // @TODO finish skipped tests
    it.skip('renders with active dark mode', () => {});

    it.skip('renders with small nav bar', () => {});

    it.skip('simulate scroll event', () => {});
});
