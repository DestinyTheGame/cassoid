const translations = require('../translations');
const { describe, it } = require('mocha');
const assume = require('assume');

describe('Translations', function () {
  it('exposes a function', function () {
    assume(translations).is.a('function');
  });

  it('returns an object with only strings as values', function () {
    const text = translations('en');

    assume(text).is.a('object');

    for (let value of Object.values(text)) {
      assume(value).is.a('string');
    }
  });
});
