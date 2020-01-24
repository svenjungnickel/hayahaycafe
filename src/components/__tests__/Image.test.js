import React from 'react';
import renderer from 'react-test-renderer';
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
        const src = 'src';

        const component = <Image src={src} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders childImageSharp fluid', () => {
        const image = {
            childImageSharp: {
                fluid: {
                    aspectRatio: 1,
                    src: 'src',
                    srcSet: 'srcSet',
                    sizes: '(max-width: 250px) 100vw, 250px',
                },
            },
        };

        const component = <Image src={image} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders childImageSharp fixed', () => {
        const image = {
            childImageSharp: {
                fixed: {
                    width: 250,
                    height: 250,
                    src: 'src',
                    srcSet: 'srcSet',
                },
            },
        };

        const component = <Image src={image} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
