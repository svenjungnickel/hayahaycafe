import React from 'react';
import renderer from 'react-test-renderer';
import { getImage } from 'gatsby-plugin-image';
import Image from '../Image';

describe('Image', () => {
    it('renders without required src throws prop type error', () => {
        const renderImage = () => {
            const component = <Image />;
            renderer.create(component);
        };

        expect(renderImage).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid src throws prop type error', () => {
        const renderImage = () => {
            const src = false;

            const component = <Image src={src} />;
            renderer.create(component);
        };

        expect(renderImage).toThrowError('Warning: Failed prop type');
    });

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
