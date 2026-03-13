import React from 'react';
import { render } from '@testing-library/react';
import NavItem from '../NavItem';

describe('NavItem', () => {
    it('renders default (inactive)', () => {
        const link = 'link';
        const name = 'name';

        const component = <NavItem link={link} name={name} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders active', () => {
        const link = 'link';
        const name = 'name with empty space';
        const active = true;

        const component = <NavItem link={link} name={name} active={active} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
