# Webpack Manifest

### Main Concept

The webpack manifest conducts the interaction of all modules.

##### 1. Runtime -

This plus the manifest data is all the code webpack needs to connect the modularized app while running in the browser. This includes logic for connecting modules that have been loaded and lazy-loading modules that haven't.

##### 2. Manifest -

The compiler enters, resolves, & maps out your application. The notes it keeps on your modules is called the "Manifest". 

##### 3. The Problem -

Ths magic happens behind the scenes and usually doesn't affect the end user (being you). However, if you want to utilize caching, the manifest is important to know about. Read more about [the manifest & managing built files here](https://webpack.js.org/guides/output-management/#the-manifest)

[Read more about The Manifest Here](https://webpack.js.org/concepts/manifest/).

---

[Previous](./NOTES-DEPENDENCY.md) || [Next](./NOTES-TARGETS.md)
