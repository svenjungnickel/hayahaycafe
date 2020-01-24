import React from 'react';
import renderer from 'react-test-renderer';
import DarkModeToggle from '../DarkModeToggle';

describe('DarkModeToggle', () => {
    it('renders without required darkMode throws prop type error', () => {
        const renderDarkModeToggle = () => {
            const component = <DarkModeToggle />;
            renderer.create(component);
        };

        expect(renderDarkModeToggle).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid darkMode throws prop type error', () => {
        const renderDarkModeToggle = () => {
            const darkMode = false;

            const component = <DarkModeToggle darkMode={darkMode} />;
            renderer.create(component);
        };

        expect(renderDarkModeToggle).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid className throws prop type error', () => {
        const renderDarkModeToggle = () => {
            const darkMode = {
                value: false,
                toggle: jest.fn(),
            };
            const className = 123;

            const component = <DarkModeToggle darkMode={darkMode} className={className} />;
            renderer.create(component);
        };

        expect(renderDarkModeToggle).toThrowError('Warning: Failed prop type');
    });

    it('renders darkMode value null (default)', () => {
        const darkMode = {
            value: null,
            toggle: jest.fn(),
        };
        const className = 'className';

        const component = <DarkModeToggle darkMode={darkMode} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders darkMode value true', () => {
        const darkMode = {
            value: true,
            toggle: jest.fn(),
        };
        const className = 'className';

        const component = <DarkModeToggle darkMode={darkMode} className={className} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
