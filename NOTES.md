# Notes on Webpack

### Concepts

You need to undestand four core concepts - 
1. entry
2. output
3. loaders
4. plugins

##### 1. entry - tells webpack where to start
Webpack then follows the graph of dependencies to know what to bundle.

##### 2. output - tells webpack how to treat bundled code

##### 3. loaders - webpack *only* understands javascript
webpack treats every file as a module.
a loader in webpack will transform these files into modules as they are added to the dependency graph
your `webpack.config.js` will look something like this - 
```
const path = require('path');

const config = {
  entry: '...',
  output: {...},
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

##### 4. plugins - based on loaders, but perform actions on chunks of your bundled modules (and more)
In order to use a plugin, you need to require it like so - 
`const HtmlWebpackPlugin = require('html-webpack-plugin');`

Then in your config object, include - 

```
plugins: [
  new webpack.optimize.UglifyJsPlugin(),
  new HtmlWebpackPlugin({template: './src/index.html'})
]
```
[Read more about plugins here](https://webpack.js.org/concepts/plugins).
