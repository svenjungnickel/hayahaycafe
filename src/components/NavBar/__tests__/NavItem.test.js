import React from 'react';
import renderer from 'react-test-renderer';
import NavItem from '../NavItem';

describe('NavItem', () => {
    it('renders default (inactive)', () => {
        const link = 'link';
        const name = 'name';

        const component = <NavItem link={link} name={name} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders active', () => {
        const link = 'link';
        const name = 'name with empty space';
        const active = true;

        const component = <NavItem link={link} name={name} active={active} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
