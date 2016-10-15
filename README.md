# ie-version.js

get Internet Explorer version

## Installation

```sh
$ npm install sasaplus1-prototype/ie-version.js
```

## Usage

via `require()`

```js
var ieVersion = require('ie-version');
```

via `<script>`

```html
<script src="ie-version.min.js"></script>
```

### Example

```js
ieVersion.get();
// older IE:
// => 5 or 6 or 7 or 8 or 9
// otherwise:
// => NaN
```

## Functions

### get()

- `return`
  - `Number`

return IE version. return `NaN` if not IE.

## License

The MIT license.
