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
