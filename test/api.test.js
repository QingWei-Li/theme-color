var test = require('ava')
var ThemeColor = require('../src/index.js')
var Colors = require('../src/colors.js')

test('blue, blue', function (t) {
  var expect = {
    theme: {
      lightPrimary: Colors.blue[0],
      primary: Colors.blue[1],
      darkPrimary: Colors.blue[2],
      accent: Colors.blue[3]
    }
  }
  var tc = new ThemeColor('blue', 'blue')

  t.deepEqual(tc, expect)
})

test('blue, red', function (t) {
  var expect = {
    theme: {
      lightPrimary: Colors.blue[0],
      primary: Colors.blue[1],
      darkPrimary: Colors.blue[2],
      accent: Colors.red[3]
    }
  }
  var tc = new ThemeColor('blue', 'red')

  t.deepEqual(tc, expect)
})

test('yellow, red', function (t) {
  var expect = {
    theme: {
      lightPrimary: Colors.yellow[0],
      primary: Colors.yellow[1],
      darkPrimary: Colors.yellow[2],
      accent: Colors.red[3]
    }
  }
  var tc = new ThemeColor('yellow', 'red')

  t.deepEqual(tc, expect)
})

test('css method', function (t) {
  var result = new ThemeColor('blue', 'blue').css()
  var expect = '.light-primary {background-color: #BBDEFB;}.primary {background-color: #2196F3;}.dark-primary {background-color: #1976D2;}.accent {background-color: #448AFF;}'

  t.is(result, expect)
})

test('custom classname', function (t) {
  var result = new ThemeColor('blue', 'blue').css({
    prefix: 'color-',
    primary: 'main'
  })
  var expect = '.color-light-primary {background-color: #BBDEFB;}.color-main {background-color: #2196F3;}.color-dark-primary {background-color: #1976D2;}.color-accent {background-color: #448AFF;}'

  t.is(result, expect)

  var result2 = new ThemeColor('blue', 'blue').css({
    primary: 'main'
  })
  var expect2 = '.light-primary {background-color: #BBDEFB;}.main {background-color: #2196F3;}.dark-primary {background-color: #1976D2;}.accent {background-color: #448AFF;}'

  t.is(result2, expect2)
})

test('get method', function (t) {
  var expect = {
    lightPrimary: Colors.blue[0],
    primary: Colors.blue[1],
    darkPrimary: Colors.blue[2],
    accent: Colors.blue[3]
  }
  var tc = new ThemeColor('blue', 'blue').get()

  t.deepEqual(tc, expect)
})
