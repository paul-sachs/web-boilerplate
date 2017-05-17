const path = require('path');
const webpack = require('webpack');
const packages = require('./package.json');

const dependencies = Object.keys(packages.dependencies);

const nonJsDeps = {
};
const vendorsToExclude = {
  autoprefixer: true,
  'babel-runtime': true,
  express: true,
  // "react-datagrid": true,
  // react: true,
  // 'react-dom': true,
  // "@fss/react-components": true
};
const vendorDeps = [];
for (var i = 0; i < dependencies.length; i++) {
  if (!nonJsDeps[dependencies[i]] && !vendorsToExclude[dependencies[i]]) {
    vendorDeps.push(dependencies[i]);
    console.log(dependencies[i]);
  }
}
// vendorDeps.push('react-addons-transition-group');
// vendorDeps.push('react-addons-css-transition-group');

module.exports = {
  // output as library
  output: {
    filename: '[name].js',
    library: '[name]_lib',
    path: path.join(__dirname, './dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('./node_modules/react'),
      "react-dom": path.resolve('./node_modules/react-dom')
    }
  },

  entry: {
    vendorLib: vendorDeps
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/[name]-manifest.json'),
      name: '[name]_lib'
    })
  ],

  // externals: {
  //   'react': 'react',
  //   'react-dom': 'react-dom'
  // }

};
