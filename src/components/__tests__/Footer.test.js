import React from 'react';
import renderer from 'react-test-renderer';
import Footer, { NavItem } from '../Footer';

jest.mock('../SocialMediaIcons');
jest.mock('../FooterAddress');

describe('Footer', () => {
    it('renders NavItem without required link throws prop type error', () => {
        const renderNavItem = () => {
            const name = 'name';

            const component = <NavItem name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders NavItem without required name throws prop type error', () => {
        const renderNavItem = () => {
            const link = 'link';

            const component = <NavItem link={link} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders NavItem with invalid link throws prop type error', () => {
        const renderNavItem = () => {
            const link = 123;
            const name = 'name';

            const component = <NavItem link={link} name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders NavItem with invalid name throws prop type error', () => {
        const renderNavItem = () => {
            const link = 'link';
            const name = 123;

            const component = <NavItem link={link} name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const component = <Footer />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
