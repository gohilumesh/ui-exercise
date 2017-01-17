# emberjs

This is a standard Ember installation.  It has been pre-configured with an
application template.

You are free to implement everything is this template, or else create one or
more routes.

We have pre-configured this code base to use Bootstrap, so feel free to either
use that for layout and style or replace it with another framework, if you like.

## Quickstart

```
$ npm install
$ ember serve
```

## API

The API client is implemented as a service. It provides a single method,
`getWidgets()`, which returns a Promise that resolves to a list of widget objects.

```javascript

// my-component.js
export default Ember.Component.extend({
  api: Ember.inject.service(),

  didRender() {
    this.get('api').getWidgets().then(widgets => console.log(widgets));
  }
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
