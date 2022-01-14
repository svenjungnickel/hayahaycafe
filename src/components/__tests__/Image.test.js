import React from 'react';
import renderer from 'react-test-renderer';
import { getImage } from 'gatsby-plugin-image';
import Image from '../Image';

describe('Image', () => {
    it('renders <img>', () => {
        const component = <Image src={'src'} alt="alt" />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders GatsbyImage', () => {
        getImage.mockImplementation(() => true);

        const component = <Image src={'image'} alt="alt" />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
