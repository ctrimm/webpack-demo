# Webpack Entry

### Main Concept

There are multiple ways to define your `entry` object in your webpack config file.

##### 1. Single Entry Syntax (shorthand) -
```
const config = {
    entry: './path/to/entry/file.js'
};
```

*THIS IS SHORTHAND FOR* -
```
const config = {
    entry: {
        main: './path/to/entry/file.js'
    }
};
```
*Note* - You _can_ pass an array to `entry` and it will put the dependent files together into one chunk.
*Note* - This is great for quickly having a config for a library with 1 entry point but does not do well with scaling/flexibility.

##### 2. Object Syntax -
```
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};
```
*Note* - This is more verbose - making it scalable, able to separate by environment, build targets, & runtime.

[Read more about Entry Points Here](https://webpack.js.org/concepts/entry-points).

---

[Previous](./NOTES.md) || [Next](./NOTES-OUTPUT.md)
