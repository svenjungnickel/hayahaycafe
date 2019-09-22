/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import React from 'react';
import CMS from 'netlify-cms-app';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import { StartPageTemplate } from '../../src/templates/StartPage';
import { ContactPageTemplate } from '../../src/templates/ContactPage';
import { DefaultPageTemplate } from '../../src/templates/DefaultPage';

if (window.location.hostname === 'localhost' && window.localStorage.getItem('netlifySiteURL')) {
    CMS.registerPreviewStyle(window.localStorage.getItem('netlifySiteURL') + '/admin/cms.css');
}

// CMS.registerMediaLibrary(cloudinary);

/**
 * Register preview templates
 */
CMS.registerPreviewTemplate('start-page', ({ entry }) => <StartPageTemplate {...entry.toJS().data} />);
CMS.registerPreviewTemplate('contact-page', ({ entry }) => <ContactPageTemplate {...entry.toJS().data} />);
CMS.registerPreviewTemplate('legal-page', ({ entry }) => <DefaultPageTemplate {...entry.toJS().data} />);
CMS.registerPreviewTemplate('data-privacy-page', ({ entry }) => <DefaultPageTemplate {...entry.toJS().data} />);
