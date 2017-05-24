const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    easyState: './src/easyState.js',
    helloWorld: './examples/helloWorld/App.jsx',
    simpleTodos: './examples/simpleTodos/App.jsx',
    todoMVC: './examples/todoMVC/App.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-decorators-legacy']
          }
        }
      },
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'examples')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }
      }
    ]
  }
}
