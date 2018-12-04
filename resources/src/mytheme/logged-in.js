import 'plone';
import 'plone-logged-in';

// import 'pfgquickedit';
// import 'mosaic';
// import 'layouts-editor';
// import 'resourceregistry';

import './default.less';
import './theme.less';
import './logged-in.less';

import jQuery from 'jquery';  // Expose jQuery for convenience
window.jQuery = jQuery;

window.require = undefined;  // Fix @@searchs
