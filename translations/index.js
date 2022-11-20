const supported = {
  en: require('./en.js')
};

/**
 * Returns the translations for the application.
 *
 * @param {String} [lang=en] Language that we want to use.
 * @returns {Object} The translation strings.
 * @public
 */
module.exports = function translations(lang = 'en') {
  //
  // Always use english as base, it's our source of truth. This means that
  // when new keys are introduced they will still default to english instead
  // of no translation.
  //
  return { ...supported.en, ...(supported[lang] || {}) };
}
