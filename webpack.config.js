const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
    minify: {
      html5                          : true,
      collapseWhitespace             : true,
      minifyCSS                      : true,
      minifyJS                       : true,
      minifyURLs                     : false,
      removeAttributeQuotes          : true,
      removeComments                 : true, // false for Vue SSR to find app placeholder
      removeEmptyAttributes          : true,
      removeOptionalTags             : true,
      removeRedundantAttributes      : true,
      removeScriptTypeAttributes     : true,
      removeStyleLinkTypeAttributese : true,
      useShortDoctype                : true
    },
  })
});

module.exports = {
    entry: {
        home :["./src/assets/js/main.js", "./src/assets/css/main.css"],
        product :["./src/assets/js/product.js", "./src/assets/css/product.css"],
        project :["./src/assets/js/project.js", "./src/assets/css/project.css"],
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: "assets/js/[chunkhash].js",
        assetModuleFilename: "assets/[hash][ext]"
    },
    performance: {
      // Turn off size warnings for entry points
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: 'html-loader',
        },
        {
          test: /(favicon\.ico|site\.webmanifest|browserconfig\.xml|robots\.txt|humans\.txt)$/,
          type: 'asset/resource',
            generator: {
              filename: 'assets/ico/[hash][ext][query]'
            },
          exclude: /node_modules/,
        },
        {
          test: /\.(svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/svg/[hash][ext][query]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?[a-z0-9=.]+)?$/,
          type: 'asset/resource',
            generator: {
              filename: 'assets/webfonts/[hash][ext][query]'
            },
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?v=[0-9]\.[0-9]\.[0-9])$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]'
          },
          exclude: /node_modules/,
        }
      ],
    },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[chunkhash].css",
      chunkFilename: "assets/css/[id].[chunkhash].css",
    }),

    new CopyPlugin ({
      patterns:[
        {
          from: "./src/images/fulls/",
          to: "images/fulls/",
        },
        {
          from: "./src/images/products/",
          to: "images/products/",
        },
        {
          from: "./src/images/3D/",
          to: "images/3D/",
        }
      ]
    }),

    new CleanWebpackPlugin(),
    assetsPluginInstance

  ].concat(multipleHtmlPlugins)
};