const translate = require('../../translations');
const { selection } = require('../const');
const { state } = require('red/state');

//
// The default translation of the site's UI.
//
state.translations = translate('en');

//
// Extract the perk selection from the window.
//
state.selection = typeof window === 'undefined' ? {} : (function parse(whitelist) {
  const param = new URLSearchParams(window.location.search);
  const result = {};

  for (const [key, value] of param.entries()) {
    if (whitelist.includes(key)) result[key] = value;
  }

  return result;
}(selection));


//
// Different modes the site can be rendered in. This changes various of parts
// of the UI.
//
state.modes = {
  creator: false,   // Creator mode removes some of the backgrounds
  theme: 'dark'     // Current theme
};
