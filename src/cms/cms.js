/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from 'netlify-cms-app';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import StartPagePreview from './previews/StartPagePreview';
import ContactPagePreview from './previews/ContactPagePreview';
import GalleryPagePreview from './previews/GalleryPagePreview';
import MenuPagePreview from './previews/MenuPagePreview';
import DefaultPagePreview from './previews/DefaultPagePreview';

if (window.location.hostname === 'localhost') {
    const netlifySiteURL = window.localStorage.getItem('netlifySiteURL');

    if (!netlifySiteURL && process.env.NETLIFY_SITE_URL) {
        window.localStorage.setItem('netlifySiteURL', process.env.NETLIFY_SITE_URL);
        window.location.reload();
    }

    if (netlifySiteURL) {
        CMS.registerPreviewStyle(`${netlifySiteURL}/admin/cms.css`);
    }
}

// CMS.registerMediaLibrary(cloudinary);

/**
 * Register preview templates
 */
CMS.registerPreviewTemplate('start-page', StartPagePreview);
CMS.registerPreviewTemplate('contact-page', ContactPagePreview);
CMS.registerPreviewTemplate('gallery-page', GalleryPagePreview);
CMS.registerPreviewTemplate('about-page', DefaultPagePreview);
CMS.registerPreviewTemplate('menu-page', MenuPagePreview);
CMS.registerPreviewTemplate('legal-page', DefaultPagePreview);
CMS.registerPreviewTemplate('data-privacy-page', DefaultPagePreview);
