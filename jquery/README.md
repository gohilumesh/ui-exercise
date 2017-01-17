# jQuery exercise

The exercise is organized into one `index.html` file and a `js` directory.
Please put your code into the `js` directory.

We have started you off with a `js/app.js` file which is already included in
the index file.

We have pre-configured this code base to use Bootstrap, so feel free to either
use that for layout and style or replace it with another framework, if you like.

## The API client

The API client is already included in the global namespace with the variable
`API`.  It provides a single method, `getWidgets()`, which returns a Promise that
resolves to a list of widget objects.

```javascript
API
  .getWidgets()
  then(function (widgets) {
    console.log('WIDGETS', widgets);
  });
```

Each widget object takes the form:
```javascript
{
  name:     "Widget name",
  size:     "(small|medium|large|extra-large)",
  capacity: "[\d+]"
}
```
