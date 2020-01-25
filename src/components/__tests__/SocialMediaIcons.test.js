import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import SocialMediaIcons, { SocialMediaIcon } from '../SocialMediaIcons';

describe('SocialMediaIcons', () => {
    it('renders without required item throws prop type error', () => {
        const renderSocialMediaIcon = () => {
            const component = <SocialMediaIcon />;
            renderer.create(component);
        };

        expect(renderSocialMediaIcon).toThrowError('Warning: Failed prop type');
    });

    it('renders without required item url throws prop type error', () => {
        const renderSocialMediaIcon = () => {
            const icon = {
                type: 'type',
            };

            const component = <SocialMediaIcon item={icon} />;
            renderer.create(component);
        };

        expect(renderSocialMediaIcon).toThrowError('Warning: Failed prop type');
    });

    it('renders without required item type throws prop type error', () => {
        const renderSocialMediaIcon = () => {
            const icon = {
                url: 'url',
            };

            const component = <SocialMediaIcon item={icon} />;
            renderer.create(component);
        };

        expect(renderSocialMediaIcon).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid item url throws prop type error', () => {
        const renderSocialMediaIcon = () => {
            const icon = {
                url: 123,
                type: 'facebook',
            };

            const component = <SocialMediaIcon item={icon} />;
            renderer.create(component);
        };

        expect(renderSocialMediaIcon).toThrowError('Warning: Failed prop type');
    });

    it('renders with unknown icon throws prop type error', () => {
        const renderSocialMediaIcon = () => {
            const icon = {
                url: 'url',
                type: 'unknown',
            };

            const component = <SocialMediaIcon item={icon} />;
            renderer.create(component);
        };

        expect(renderSocialMediaIcon).toThrowError('Warning: Failed prop type');
    });

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
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty globalSettings data', () => {
        const data = {
            globalSettings: {},
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

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
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

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
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <SocialMediaIcons />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
