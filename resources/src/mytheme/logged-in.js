import 'plone';
import 'plone-logged-in';
import 'resourceregistry';

/* Add extra bundles when needed
import 'pfgquickedit';
import 'mosaic';
import 'layouts-editor';
 */

import './default.less';
import './theme.less';
import './logged-in.less';

/* Expose jQuery when needed
import jQuery from 'jquery';
window.jQuery = jQuery;
*/

import requirejs from 'exports-loader?requirejs!script-loader!requirejs/require.js';
requirejs.config({});  // the real configuration is loaded in webpack.xml
