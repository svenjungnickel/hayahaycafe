import React from 'react';
import renderer from 'react-test-renderer';
import NavItem from '../NavItem';

describe('NavItem', () => {
    it('renders without required link throws prop type error', () => {
        const renderNavItem = () => {
            const name = 'name';

            const component = <NavItem name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders without required name throws prop type error', () => {
        const renderNavItem = () => {
            const link = 'link';

            const component = <NavItem link={link} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid link throws prop type error', () => {
        const renderNavItem = () => {
            const link = 123;
            const name = 'link';

            const component = <NavItem link={link} name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid name throws prop type error', () => {
        const renderNavItem = () => {
            const link = 'link';
            const name = 123;

            const component = <NavItem link={link} name={name} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid active status throws prop type error', () => {
        const renderNavItem = () => {
            const link = 'name';
            const name = 'link';
            const active = 'active';

            const component = <NavItem link={link} name={name} active={active} />;
            renderer.create(component);
        };

        expect(renderNavItem).toThrowError('Warning: Failed prop type');
    });

    it('renders default (inactive)', () => {
        const link = 'name';
        const name = 'link';

        const component = <NavItem link={link} name={name} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders active', () => {
        const link = 'name';
        const name = 'link';
        const active = true;

        const component = <NavItem link={link} name={name} active={active} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
