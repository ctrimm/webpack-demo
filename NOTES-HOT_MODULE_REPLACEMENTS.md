# Webpack Hot Module Replacement

### Main Concept

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running - without a full reload.

*Benefits* - 
- retains application state (lost during a full reload)
- save dev time by updating only whats changed
- tweak styles nearly as fast as using the debugger

##### 1. How It Works -

*In the Application* - The app asks the HMR to check for updates, the runtime async downloads the updates & notifies the app, app asks runtime to apply updates, runtime syncrhonously applies the updates

*In the Compiler* - Update pushed out is the updated manifest & one (or more) chunks of javascript

*In a Module* - HMR is an *opt-in* feature that only affects modules containing HMR code. [Read more here](https://webpack.js.org/api/hot-module-replacement/) or [on the HMR guide here](https://webpack.js.org/guides/hot-module-replacement/).

*In the Runtime* - A bit technical, can [read more here](https://webpack.js.org/concepts/hot-module-replacement/#in-the-runtime).

[Read more about Hot Module Replacements Here](https://webpack.js.org/concepts/hot-module-replacement/).
