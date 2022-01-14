import React from 'react';
import renderer from 'react-test-renderer';
import Footer, { NavItem } from '../Footer';

jest.mock('../SocialMediaIcons');
jest.mock('../FooterAddress');

describe('Footer', () => {
    it('renders correctly', () => {
        const component = <Footer />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
