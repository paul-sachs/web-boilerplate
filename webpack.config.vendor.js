const path = require('path');
const webpack = require('webpack');
const packages = require('./package.json');

const dependencies = Object.keys(packages.dependencies);

const nonJsDeps = {
};
const vendorsToExclude = {
  autoprefixer: true,
  "babel-runtime": true,
  express: true
};
const vendorDeps = [];
for (var i = 0; i < dependencies.length; i++) {
  if (!nonJsDeps[dependencies[i]] && !vendorsToExclude[dependencies[i]]) {
    vendorDeps.push(dependencies[i]);
  }
}
vendorDeps.push('varicent-common');
module.exports = {
  // output as library
  output: {
    filename: '[name].js',
    library: '[name]_lib',
    path: path.join(__dirname, './dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  entry: {
    vendorLib: vendorDeps
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/[name]-manifest.json'),
      name: '[name]_lib'
    })
  ]

};
