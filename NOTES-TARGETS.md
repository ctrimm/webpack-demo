# Webpack Targets

### Main Concept

The webpack manifest conducts the interaction of all modules.

##### 1. Usage -

`webpack.config.js`
```
module.exports = {
    target: 'node'
};
```
This will have webpack compile usage in a Node.js-like environment. There are other popular target values.

##### 2. Multiple Targets -

Webpack *does not* support multiple strings being passed into the `target` property. However, you can create an isomorphic library by bundling two separate configurations.

[Read more about Targets Here](https://webpack.js.org/concepts/targets/).

---

[Previous](./NOTES-MANIFEST.md) || [Next](./NOTES-HOT_MODULE_REPLACEMENT.md)
