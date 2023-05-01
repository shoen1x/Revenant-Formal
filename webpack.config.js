'use strict';

/**
 * @Created by Revenant|Shoenix on 2022/12/12
 * @version 0.9.26.10-PreAlpha Created
 * @description Using Next Generation Vanilla JS & JS Modules today with Webpack 3 & Babel!
 *
 * @license MIT
 * @copyright Shoenix Studios All Rights Reserved
 * @update 2023.3.5
 *
 */

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

const PROD = JSON.parse(process.env.PROD_ENV || '0');

let assetsPluginInstance = new AssetsPlugin({
  path: path.join(__dirname, './', 'docs'),
  publicPath: "/docs/",
  removeFullPathAutoPrefix: true,
  metadata: {version: '0.9.26.10-PreAlpha', date: '05 Mac, 2023', revision: 'RevF' + Date.parse(Date())},

  processOutput: function (assets) {
    return JSON.stringify(assets);
  }
});

let htmlPageNames = ['home', 'product', 'project', 'blog', '404'];
let multipleHtmlPlugins_en = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/en-US/${name}.html`, // relative path to the HTML files
    filename: `en-US/${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
    inject: true,
    // minify: {
    //   html5                          : true,
    //   collapseWhitespace             : true,
    //   minifyCSS                      : true,
    //   minifyJS                       : true,
    //   minifyURLs                     : false,
    //   removeAttributeQuotes          : true,
    //   removeComments                 : true, // false for Vue SSR to find app placeholder
    //   removeEmptyAttributes          : true,
    //   removeOptionalTags             : true,
    //   removeRedundantAttributes      : true,
    //   removeScriptTypeAttributes     : true,
    //   removeStyleLinkTypeAttributese : true,
    //   useShortDoctype                : true
    // },
  })
});

let multipleHtmlPlugins_my = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/ms-MY/${name}.html`, // relative path to the HTML files
    filename: `ms-MY/${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
    inject: true,
    // minify: {
    //   html5                          : true,
    //   collapseWhitespace             : true,
    //   minifyCSS                      : true,
    //   minifyJS                       : true,
    //   minifyURLs                     : false,
    //   removeAttributeQuotes          : true,
    //   removeComments                 : true, // false for Vue SSR to find app placeholder
    //   removeEmptyAttributes          : true,
    //   removeOptionalTags             : true,
    //   removeRedundantAttributes      : true,
    //   removeScriptTypeAttributes     : true,
    //   removeStyleLinkTypeAttributese : true,
    //   useShortDoctype                : true
    // },
  })
});

module.exports = {
    entry: {
        home :["./src/en-US/home.html", "./src/ms-MY/home.html", "./src/assets/js/home.js", "./src/assets/css/home.css"],
        product :["./src/en-US/product.html", "./src/ms-MY/product.html", "./src/assets/js/product.js", "./src/assets/css/product.css"],
        project :["./src/en-US/project.html", "./src/ms-MY/product.html", "./src/assets/js/project.js", "./src/assets/css/project.css"],
        maintenance : "./src/Maintenance.html",
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: "assets/js/[name].js?v=[contenthash]",
        chunkFilename: "assets/js/[name].chunk.js?v=[contenthash]",
        assetModuleFilename: "assets/portal/[name][ext]?v=[contenthash]",
        crossOriginLoading: "anonymous",
    },
    performance: {
      // Turn off size warnings for entry points
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'html-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/i,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/svg/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?[a-z0-9=.]+)?$/,
          type: 'asset/resource',
            generator: {
              filename: 'assets/webfonts/[name][ext]?v=[contenthash]'
            },
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(gltf|glb)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/3D/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(webm)$/,
          type: 'asset/resource',
          generator: {
            filename: 'videos/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /(og-image).*\.jpg$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/og-image/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /(favicon\.ico|site\.webmanifest|browserconfig\.xml|robots\.txt|humans\.txt)$/,
          type: 'asset/resource',
            generator: {
              filename: 'assets/ico/[name][ext]?v=[contenthash]'
            },
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      realContentHash: true,
    },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css?v=[contenthash]",
      chunkFilename: "assets/css/[id].css?v=[contenthash]",
    }),

    new HtmlWebpackPlugin({
      template: `./src/Maintenance.html`, // relative path to the HTML files
      filename: `Maintenance.html`, // output HTML files
      chunks: [`Maintenance`], // respective JS files
      inject: true,
    }),

    // new SubresourceIntegrityPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackInjector(),
    assetsPluginInstance,
    new WebpackAssetsManifest({ integrity: true }),

  ]//.concat(multipleHtmlPlugins_en, multipleHtmlPlugins_my)
};