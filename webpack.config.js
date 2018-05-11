const path = require('path');
const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js',
      canvas: './src/canvas.js',
      box:'./src/box.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new webpack.ProvidePlugin({
      'THREE': 'three'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      alias: {
        'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
        'three/OBJLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/OBJLoader.js')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
           'babel-loader'
        ]
      }
    ]    
  }
};


