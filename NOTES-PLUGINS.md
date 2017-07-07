# Webpack Plugins

### Main Concept

Plugins do anything that a loader cannot do and are the backbone of webpack.

##### 1. Usage -

A webpack plugin is a JavaScript object that has an `apply` property. This `apply` property is called by the webpack compiler, giveing access to the entire compilation lifecycle.

```
function ConsoleLogOnBuildWebpackPlugin() {
    
};

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin('run', function(compiler, callback) {
        console.log("The webpack build process is starting!");
        
        callback();
    });
};
```

Since plugins take args/options, you must pass a new instance to the `plugins` property.

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: '...',
  output: {...},
  module: {...},
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```

[Read more about Plugins Here](https://webpack.js.org/concepts/plugins).
