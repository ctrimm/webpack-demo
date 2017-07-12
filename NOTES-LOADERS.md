# Webpack Loaders

### Main Concept

Loaders are essentially pre-processing that occurs to files as you import them - ie transform from typescript to javascript

##### 1. Usage -
```
npm install --save-dev css-loader
npm install --save-dev ts-loader
```
Now we tell webpack how to handle this...
```
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    }
};
```

You can use a loader by setting in in the config (above), inline, or with the CLI. The latter two are not recommended.

Loaders can be chained, synchronous or asynchronous, run in Node.js, accept quesry params, and a few other features

[Read more about Loaders Here](https://webpack.js.org/concepts/loaders).

---

[Previous](./NOTES-OUTPUT.md) || [Next](./NOTES-PLUGINS.md)
