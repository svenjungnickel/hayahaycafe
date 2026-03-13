import React from 'react';
import { render } from '@testing-library/react';
import { getImage } from 'gatsby-plugin-image';
import Image from '../Image';

describe('Image', () => {
    it('renders <img>', () => {
        const component = <Image src={'src'} alt="alt" />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders GatsbyImage', () => {
        getImage.mockImplementation(() => true);

        const component = <Image src={'image'} alt="alt" />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
