import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import DarkModeToggle from '../DarkModeToggle';

describe('DarkModeToggle', () => {
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

    it('simulate switch change event', () => {
        const toggleFunction = jest.fn();
        const darkMode = {
            value: false,
            toggle: toggleFunction,
        };
        const className = 'className';

        const DarkModeToggleComponent = mount(<DarkModeToggle darkMode={darkMode} className={className} />);
        const SwitchComponent = DarkModeToggleComponent.find('input[role="switch"]');

        expect(SwitchComponent.props().checked).toEqual(false);
        SwitchComponent.simulate('change');
        expect(toggleFunction).toHaveBeenCalledTimes(1);
    });
});
