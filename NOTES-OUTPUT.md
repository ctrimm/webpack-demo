# Webpack Output

### Main Concept

There can only be *one* output config object that tells webpack how to write your compiled files.

##### 1. Usage -
At a minimum, you need the `filename` and `path`
```
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/proj/public/assets'
    }
};
```

If you have multiple entries, you should use substitutions to ensure each filename is unique
```
const config = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};
```
The above would write to `./dist/app.js` and `./dist/search.js`.

[Read more about Output Here](https://webpack.js.org/concepts/output).
