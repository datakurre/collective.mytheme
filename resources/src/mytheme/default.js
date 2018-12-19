import 'plone';

import './default.less';
import './theme.less';

/* Expose jQuery when needed
import jQuery from 'jquery';
window.jQuery = jQuery;
*/

import requirejs from 'exports-loader?requirejs!script-loader!requirejs/require.js';
requirejs.config({});  // the real configuration is loaded in webpack.xml
