# Redux Modal Skeleton

This skeleton provides a starting point for standalone modal UIs that are to be distributed between several apps or
websites. For example, it could be a checkout modal that you want to be auto injected into several partner websites...


## Sample Readme for the final product

Include this package in your package.json file and run npm install

```
  "dependencies": {
        ...,
        "<package-name>": "git+https://<github_token>:x-oauth-basic@github.com/<username>/<repo-name>.git"
  }
```

## Usage Method 1

Use the pre-compiled css and js files. For example, you can copy them to the public domain and import them directly in
your HTML source.

```
node_modules/<package-name>/dist/redux-modal.css
node_modules/<package-name>/dist/redux-modal.js
```

and then instantiate it in your window load or document ready listener with the selector of elements that should trigger the modal:

 ```
 window.addEventListener('load', function() {
     new ReduxModal({
         options: {
             openModalElementSelector: '.js-trigger'
         },
     });
 });
```

## Usage Method 2

Import the js module and instantiate it in your window load or document ready listener with the selector of elements that should trigger the modal:

```
import ReduxModal from '<package-name>/src';

window.addEventListener('load', function() {
    const reduxModal = new ReduxModal({
        options: {
            openModalElementSelector: '.js-trigger'
        },
    });
});
```

Import the main sass file in your sass project:

```
@import '../path/to/node_modules/<package-name>/src/styles/main';
```

## TODO
- fix coverage reports
- automate building dist files with cache busting
