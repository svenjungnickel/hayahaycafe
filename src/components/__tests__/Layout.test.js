import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

jest.mock('../SEO');
jest.mock('../NavBar');
jest.mock('../Footer/Footer');

describe('Layout', () => {
    it('renders without required children throws prop type error', () => {
        const renderLayout = () => {
            const meta = {};
            const currentPage = 'currentPage';

            const component = <Layout meta={meta} currentPage={currentPage} />;
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders without required meta throws prop type error', () => {
        const renderLayout = () => {
            const children = <div>children</div>;
            const currentPage = 'currentPage';

            const component = <Layout currentPage={currentPage}>{children}</Layout>;
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders without required currentPage throws prop type error', () => {
        const renderLayout = () => {
            const children = <div>children</div>;
            const meta = {};

            const component = <Layout meta={meta}>{children}</Layout>;
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid children throws prop type error', () => {
        const renderLayout = () => {
            const children = null;
            const meta = {};
            const currentPage = 'currentPage';

            const component = (
                <Layout meta={meta} currentPage={currentPage}>
                    {children}
                </Layout>
            );
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid meta throws prop type error', () => {
        const renderLayout = () => {
            const children = <div>children</div>;
            const meta = false;
            const currentPage = 'currentPage';

            const component = (
                <Layout meta={meta} currentPage={currentPage}>
                    {children}
                </Layout>
            );
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid currentPage throws prop type error', () => {
        const renderLayout = () => {
            const children = <div>children</div>;
            const meta = {};
            const currentPage = 123;

            const component = (
                <Layout meta={meta} currentPage={currentPage}>
                    {children}
                </Layout>
            );
            renderer.create(component);
        };

        expect(renderLayout).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const children = <div>children</div>;
        const meta = {};
        const currentPage = 'currentPage';

        const component = (
            <Layout meta={meta} currentPage={currentPage}>
                {children}
            </Layout>
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
