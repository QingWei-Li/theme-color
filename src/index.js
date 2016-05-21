var colors = require('./colors')
var colorsArray = Object.keys(colors)
var ThemeColor

/**
 * filter the useful color
 * @param  {string} color - color name
 * @return {string}         useful color
 */
var _filterColor = function (color) {
  return colors[color] ? color : colorsArray[Math.floor(Math.random() * 10)]
}

/**
 * generator theme color
 * @param  {string} primaryColor
 * @param  {string} accentColor
 * @return {object}
 */
var _generator = function (primaryColor, accentColor) {
  primaryColor = _filterColor(primaryColor)
  accentColor = _filterColor(accentColor)

  var primaryPalette = colors[primaryColor]
  var accentPalette = colors[accentColor]

  return {
    lightPrimary: primaryPalette[0],
    primary: primaryPalette[1],
    darkPrimary: primaryPalette[2],
    accent: accentPalette[3]
  }
}

/**
 * camel case to kebab case
 * @param  {string} str - camel
 * @return {string}       kebab
 */
var _kebabCase = function (str) {
  return str.replace(/[a-z]([A-Z])+/g, function (match) {
    return match[0] + '-' + match.substring(1)
  }).toLowerCase()
}

/**
 * render css
 * @param  {object} obj       - theme object
 * @param  {object} opts      - options
 * @param  {string} attribute - css attribute
 * @return {string}             css
 */
var _renderCSS = function (obj, opts, attribute) {
  var css = ''
  var prefix = opts.prefix || ''
  var suffix = opts.suffix || ''
  var _className = {}

  Object.keys(obj).forEach(function (key) {
    var colorCSS
    var className
    var color = obj[key]
    var originalKey = key

    if (opts.hasOwnProperty(key)) {
      key = opts[key]
    } else {
      key = _kebabCase(key)
    }

    className = prefix + key + suffix
    _className[originalKey] = className
    colorCSS = '.' + className + ' {' +
                  attribute + ': ' + color + ';' +
               '}'

    css += colorCSS
  })
  ThemeColor.prototype._className = _className

  return css
}

/**
 * ThemeColor
 * @param {string} primary - primary color
 * @param {string} accent  - accent color
 * @example
 * var tc = new ThemeColor() // random theme
 * var tc2 = new ThemeColor('red', 'yellow') // red primary color, yellow accent color
 * var tc3 = new ThemeColor('blue') // blue primary color, random accent color
 */
ThemeColor = function (primary, accent) {
  this.theme = _generator(primary, accent)

  return this
}

/**
 * return theme color object
 * @return {object}
 */
ThemeColor.prototype.get = function () {
  return this.theme
}

/**
 * return css string
 * @param  {object} opts - prefix: String, css classname prefix
 * @return {string}      css string
 */
ThemeColor.prototype.css = function (opts) {
  var css = ''

  opts = opts || {}
  css += _renderCSS(this.theme, opts, 'background-color')
  // css += _renderCSS(textColor, opts, 'color')

  return css
}

module.exports = ThemeColor
