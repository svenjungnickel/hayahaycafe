/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import React from 'react';
import CMS from 'netlify-cms-app';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import StartPagePreview from './previews/StartPagePreview';
import ContactPagePreview from './previews/ContactPagePreview';
import DefaultPagePreview from './previews/DefaultPagePreview';

if (window.location.hostname === 'localhost' && window.localStorage.getItem('netlifySiteURL')) {
    CMS.registerPreviewStyle(window.localStorage.getItem('netlifySiteURL') + '/admin/cms.css');
}

// CMS.registerMediaLibrary(cloudinary);

/**
 * Register preview templates
 */
CMS.registerPreviewTemplate('start-page', StartPagePreview);
CMS.registerPreviewTemplate('contact-page', ContactPagePreview);
CMS.registerPreviewTemplate('legal-page', DefaultPagePreview);
CMS.registerPreviewTemplate('data-privacy-page', DefaultPagePreview);
