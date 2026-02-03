globalThis.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock('fslightbox-react', () => () => null);

jest.mock('react-google-recaptcha', () => {
    const React = require('react');
    const MockRecaptcha = React.forwardRef((props, ref) => {
        React.useImperativeHandle(ref, () => ({
            getValue: () => null,
        }));

        return React.createElement('div', { 'data-testid': 'recaptcha' });
    });

    MockRecaptcha.displayName = 'Recaptcha';
    return MockRecaptcha;
});

const reactTestRenderer = require('react-test-renderer');
const originalCreate = reactTestRenderer.create;

reactTestRenderer.create = (element, options) => {
    let renderer;

    reactTestRenderer.act(() => {
        renderer = originalCreate(element, options);
    });

    return renderer;
};
