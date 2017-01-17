This is a standard Angular 2 installation using the [quickstart seed](https://github.com/angular/quickstart)
package.

We have pre-configured this code base to use Bootstrap, so feel free to either
use that for layout and style or replace it with another framework, if you like.

## Quickstart

```
$ npm install
$ npm start
```

## API

The API client is implemented as a service.  It provides a single method,
`getWidgets()`, which returns a Promise that resolves to a list of widget objects.

```javascript
// my.component.ts
import { ApiService } from './api.service.ts';

// in my component constructor
constructor(apiService: ApiService) {
  apiService.getWidgets().then(widgets => console.log(widgets));
}
```

Each widget object takes the form:
```javascript
{
  name:     "Widget name",
  size:     "(small|medium|large|extra-large)",
  capacity: "[\d+]"
}
```
