import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';
import { defaultImage, childImageSharpFluid, childImageSharpFixed } from '../../__fixtures__/Images';

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
        const component = <Image src={defaultImage} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders childImageSharp fluid', () => {
        const component = <Image src={childImageSharpFluid} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders childImageSharp fixed', () => {
        const component = <Image src={childImageSharpFixed} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
