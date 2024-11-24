const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js', // Use app.js as the entry point
  output: {
    filename: 'app.js', // Output JavaScript as app.js
    path: path.resolve(__dirname, 'public'), // Output directory
    clean: true, // Clean the folder before each build
  },
  mode: 'development', // Change to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/, // Process SCSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/, // Process plain CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your HTML template
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output CSS as styles.css
    }),
  ],
  devServer: {
    static: './public', // Serve files from the public folder
    open: true, // Automatically open the browser
    port: 8080, // Development server port
  },
};
