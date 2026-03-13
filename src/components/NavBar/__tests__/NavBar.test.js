import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';

jest.mock('../NavItem');
jest.mock('../DarkModeToggle');

describe('NavBar', () => {
    it('renders with disabled dark mode (default)', () => {
        const currentPage = '/';

        const component = <NavBar currentPage={currentPage} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
