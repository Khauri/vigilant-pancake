module.exports = {
  entry: './index.js',
  target: 'async-node',
  mode: 'development',
  output: {
    libraryTarget: 'commonjs',
    assetModuleFilename: '[name][ext]',
  },
};
