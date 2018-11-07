const path = require('path');

module.exports = {
  entry: './src/clien',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client-[hash].bundle.js',
  },
};
