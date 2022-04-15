const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const rules = [
  {
    test: /\.[jt]sx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource'
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline'
  }
]

const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
  plugins: [
    new TSConfigPathsPlugin({
      configFile: path.resolve(__dirname, 'tsconfig.json')
    })
  ]
}

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html')
  }),
  new CleanWebpackPlugin()
]

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules
  },
  resolve,
  plugins,
  devServer: {
    static: path.join(__dirname, './src'),
    port: 3000,
    hot: 'only',
    compress: true,
    open: true
  }
}

module.exports = config
