const path = require('path');

module.exports = {
  entry: './src/client',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  optimization: {
    // Split vendor packages into our vendor bundle
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
};
