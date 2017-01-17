This is a standard React installation using the [create-react-app](https://github.com/facebookincubator/create-react-app)
script.

We have pre-configured this code base to use Bootstrap, so feel free to either
use that for layout and style or replace it with another framework, if you like.

## Quickstart

```
$ npm install
$ yarnpkg start
```

## API

The API client is implemented as a service. It provides a single method,
`getWidgets()`, which returns a Promise that resolves to a list of widget objects.

```javascript

// my-component.js
import Api from './services/api';
// ... later
const api = new Api();

api.getWidgets().then(widgets => console.log(widgets));
```

Each widget object takes the form:
```javascript
{
  name:     "Widget name",
  size:     "(small|medium|large|extra-large)",
  capacity: "[\d+]"
}
```
