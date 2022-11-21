import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import SocialMediaIcons, { SocialMediaIcon } from '../SocialMediaIcons';

describe('SocialMediaIcons', () => {
    it('renders facebook icon correctly', () => {
        const icon = {
            url: 'url',
            type: 'facebook',
        };

        const component = <SocialMediaIcon item={icon} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders instagram icon correctly', () => {
        const icon = {
            url: 'url',
            type: 'instagram',
        };

        const component = <SocialMediaIcon item={icon} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders tripadvisor icon correctly', () => {
        const icon = {
            url: 'url',
            type: 'tripadvisor',
        };

        const component = <SocialMediaIcon item={icon} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty data', () => {
        const data = {};
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty globalSettings data', () => {
        const data = {
            globalSettings: {},
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty socialMedia data array', () => {
        const data = {
            globalSettings: {
                socialMedia: [],
            },
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders all icons correctly', () => {
        const data = {
            globalSettings: {
                socialMedia: [
                    {
                        url: 'url',
                        type: 'instagram',
                    },
                    {
                        url: 'url',
                        type: 'facebook',
                    },
                    {
                        url: 'url',
                        type: 'tripadvisor',
                    },
                ],
            },
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
