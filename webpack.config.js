const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  output: {
    filename: './scripts/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][hash][ext]',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {loader: 'postcss-loader'},
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[ext]'
        }
      }
    ]
  },
}
