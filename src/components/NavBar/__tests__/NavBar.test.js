import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import NavBar from '../NavBar';

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
        const data = {
            logoMobile: {
                childImageSharp: {
                    fixed: {
                        src: 'src',
                    },
                },
            },
            logo: {
                childImageSharp: {
                    fixed: {
                        src: 'src',
                    },
                },
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <NavBar currentPage={currentPage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
