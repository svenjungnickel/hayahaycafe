import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar';

jest.mock('../NavItem');
jest.mock('../DarkModeToggle');

describe('NavBar', () => {
    it('renders with disabled dark mode (default)', () => {
        const currentPage = '/';

        const component = <NavBar currentPage={currentPage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
