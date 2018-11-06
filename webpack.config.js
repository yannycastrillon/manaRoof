const webpack = require('webpack')
const pathLib = require('path')

const devBuild = process.env.NODE_ENV !== 'production';

console.log('PATH::::', pathLib.resolve(__dirname, '../app/assets/webpack'));

const config = {
  entry: [
    './app/javascript/packs'
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: pathLib.resolve(__dirname, './app/javascript/packs')
  },

  resolve: {
    enforceModuleExtension: false,
    extensions: ['.js', '.jsx'],
    alias: {
      images: pathLib.resolve(__dirname, './app/javascript/images')
    }
  },

  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'development'})],

  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham'
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name][md5:hash].[ext]",
              outputPath: "/",
              publicPath: "/assets/"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: {
          loader: "style-loader",
          loader: "css-loader",
          loader: "sass-loader"  
        }
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
