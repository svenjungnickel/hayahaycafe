import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

jest.mock('../SEO');
jest.mock('../NavBar/NavBar');
jest.mock('../Footer/Footer');

describe('Layout', () => {
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
