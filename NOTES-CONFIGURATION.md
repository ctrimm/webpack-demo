# Webpack Configuration

### Main Concept

Webpack's config file is a JavaScript file that exports an object.

This allows you to - 
- import other files via `require(...)`
- use utilities on npm via `require(...)`
- use ternary operators for flow
- use constants or variables
- write and execute functions to generate a part of the config

##### 1. Simplest Configuration -

```
var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'foo.bundle.js'
  }
};
```

Don't forget that you can also export multiple configurations/targets.

Finally, you can also write config files in multiple programming and data languages.

[Read more about Configuration Here](https://webpack.js.org/concepts/configuration).
