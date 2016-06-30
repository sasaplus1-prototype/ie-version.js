/*!
 * @license ie-version.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/ie-version.js
 * Released under the MIT license.
 */
'use strict';

function get() {
  var div = document.createElement('div'),
      i;

  for (i = 5; i < 10; ++i) {
    div.innerHTML =
      '<!--[if (gte IE ' + i + ') & (lt IE ' + (i + 1) + ')]>' +
      '<div></div>' +
      '<![endif]-->';

    if (div.children.length > 0) {
      div = null;

      return i;
    }
  }

  div = null;

  return NaN;
}

module.exports = {
  get: get
};
