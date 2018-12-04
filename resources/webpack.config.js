const path = require('path');
const merge = require('webpack-merge');

const PlonePlugin = require('plonetheme-webpack-plugin');

const SITENAME = process.env.SITENAME || 'Plone';
const THEMENAME = process.env.THEMENAME || 'mytheme';
const PUBLICPATH = process.env.PUBLICPATH || '/' + SITENAME + '/++theme++' + THEMENAME + '/';

const PATHS = {
  src: path.join(__dirname, 'src', THEMENAME),
  build: path.join(__dirname, 'theme', THEMENAME)
};

const PLONE = new PlonePlugin({
  portalUrl: 'http://localhost:8080/' + SITENAME,
  publicPath: PUBLICPATH,
  sourcePath: PATHS.src,
  momentLocales: ['ca', 'fi'],
  debug: false
});

const common = {
  entry: {
   'default': path.join(PATHS.src, 'default'),
   'logged-in': path.join(PATHS.src, 'logged-in')
  },
  output: {
    path: PATHS.build
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ],
        include: PATHS.src
      }
    ]
  }
};

switch(path.basename(process.argv[1])) {
  case 'webpack':
    module.exports = merge(PLONE.production, common);
    break;

  case 'webpack-dev-server':
    module.exports = merge(PLONE.development, common, {
      entry: [
        path.join(PATHS.src, 'default'),
        path.join(PATHS.src, 'logged-in')
      ]
    });
    break;
}
