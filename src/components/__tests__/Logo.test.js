import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../Logo';

jest.mock('../Image');

describe('Logo', () => {
    it('renders without required logo throws prop type error', () => {
        const renderLogo = () => {
            const className = 'className';

            const component = <Logo className={className} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders without required className throws prop type error', () => {
        const renderLogo = () => {
            const logo = {
                src: 'src',
            };

            const component = <Logo logo={logo} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders without required logo src throws prop type error', () => {
        const renderLogo = () => {
            const logo = {};
            const className = 'className';

            const component = <Logo logo={logo} className={className} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid logo throws prop type error', () => {
        const renderLogo = () => {
            const logo = 123;
            const className = 'className';

            const component = <Logo logo={logo} className={className} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid logo src throws prop type error', () => {
        const renderLogo = () => {
            const logo = {
                src: 123,
            };
            const className = 'className';

            const component = <Logo logo={logo} className={className} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid className throws prop type error', () => {
        const renderLogo = () => {
            const logo = {
                src: 'src',
            };
            const className = 123;

            const component = <Logo logo={logo} className={className} />;
            renderer.create(component);
        };

        expect(renderLogo).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const logo = {
            src: 'src',
        };
        const className = 'className';

        const component = <Logo logo={logo} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
