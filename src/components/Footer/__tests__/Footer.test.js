import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

jest.mock('../SocialMediaIcons');
jest.mock('../FooterAddress');

describe('Footer', () => {
    it('renders correctly', () => {
        const component = <Footer />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
