# theme-color

[![Join the chat at https://gitter.im/QingWei-Li/theme-color](https://badges.gitter.im/QingWei-Li/theme-color.svg)](https://gitter.im/QingWei-Li/theme-color?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/QingWei-Li/theme-color.svg?branch=master)](https://travis-ci.org/QingWei-Li/theme-color) [![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/theme-color/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/theme-color?branch=master) [![npm](https://img.shields.io/npm/v/theme-color.svg?maxAge=3600)](https://www.npmjs.com/package/theme-color)
> Material theme color generator.

## DEMO
http://qingwei-li.github.io/theme-color/

## Install
```shell
$ npm i theme-color -S
```

## Quick Start
```javascript
import ThemeColor from 'theme-color'

const tc = new ThemeColor('blue', 'red')

tc.get()
/*
{
  "lightPrimary": "#BBDEFB",
  "primary": "#2196F3",
  "darkPrimary": "#1976D2",
  "accent": "#FF5252"
}
*/

tc.css({
  prefix: 'color-'
})
/*
  .color-light-primary: {
    background-color: "#BBDEFB";
  }
  .color-primary: {
    background-color: "#2196F3";
  }
  .color-dark-primary: {
    background-color: "#1976D2";
  }
  .color-accent {
    background-color: "#FF5252";
  }
 */
```

## Options
- primaryColor: String
- accentColor: String

Material color: `['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'grey', 'blueGrey']`

```javascript
// primary color blue, accent color red
var tc = new ThemeColor('blue', 'red')

// random
var tc = new ThemeColor()

// random accent color
var tc = new ThemeColor('blue')
```

## API
### get()

theme color object. like
```javascript
{
  "lightPrimary": "#BBDEFB",
  "primary": "#2196F3",
  "darkPrimary": "#1976D2",
  "accent": "#FF5252"
}
```

### css(options: Object)

return css string.

```javascript
const tc = new ThemeColor('blue', 'red')

tc.css({
  prefix: 'tc-',
  suffix: '-color',

  primary: 'main',
  lightPrimary: 'light-main',
  darkPrimary: 'dark-main',
  accent: 'second'
})
```

output
```css
.tc-light-main-color: {background-color: #BBDEFB;}
.tc-main-color: {background-color: #2196F3;}
.tc-dark-main-color: {background-color: #1976D2;}
.tc-second-color: {background-color: #FF5252;}
```


## CLI

```shell
theme-color [primayColor] [accentColor] [options]
```

### `-c --config <filename>`
config file. like
```json
{
  "color": ["blue", "red"],
  "css": {
    "prefix": "tc-",
    "suffix": "-color",
    "primary": "main",
    "darkPrimary": "dark-main",
    "lightPrimary": "light-main",
    "accent": "second"
  }
}
```

### `-o --output <filename>`
output css file.

### `-d --demo <filename>`
output demo html file.

## License
WTFPL
