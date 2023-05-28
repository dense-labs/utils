import {
    isUndefined,
    isNull,
    isString,
    isNumber, 
    isBoolean,
    isSymbol, 
    isBigInt,
    isObject, 
    isPlainObject,
    isArray, 
    isFunction,
    isRegExp,
    isJSON,
    isElement,
    isUrl,
    isEmail,
    isValidIdNumber,
    isEqual
} from '@dense-labs/utils'


// isUndefined
console.log(isUndefined(undefined) === true) // true
console.log(isUndefined(null) === false) // true
console.log(isUndefined(0) === false) // true

// isNull
console.log(isNull(null) === true) // true
console.log(isNull(undefined) === false) // true
console.log(isNull(false) === false) // true

// isString
console.log(isString('') === true) // true
console.log(isString('hello') === true) // true
console.log(isString(123) === false) // true

// isNumber
console.log(isNumber(0) === true) // true
console.log(isNumber(1.23) === true) // true
console.log(isNumber('123') === false) // true


// isBoolean
console.log(isBoolean(true) === true) // true
console.log(isBoolean(false) === true) // true
console.log(isBoolean(null) === false) // true

// isSymbol
const sym1 = Symbol('foo')
const sym2 = Symbol('bar')
console.log(isSymbol(sym1) === true) // true
console.log(isSymbol(sym2) === true) // true
console.log(isSymbol('baz') === false) // true

// isBigInt

console.log(isBigInt(BigInt(123)) === true) // true
console.log(isBigInt(123) === false) // true
console.log(isBigInt('123') === false) // true

// isObject
console.log(isObject(null) === false) // true
console.log(isObject(undefined) === false) // true
console.log(isObject({}) === true) // true

// isPlainObject
console.log(isPlainObject(null) === false) // true
console.log(isPlainObject(undefined) === false) // true
console.log(isPlainObject({}) === true) // true
console.log(isPlainObject(new Date()) === false) // true

// isArray
console.log(isArray([]) === true) // true
console.log(isArray('123'.split('')) === true) // true
console.log(isArray('') === false) // true

// isFunction
console.log(isFunction(function () {}) === true) // true
console.log(isFunction(() => {}) === true) // true
console.log(isFunction(Function) === true) // true
console.log(isFunction({}) === false) // true

// isElement
const el = document.createElement('div')
console.log(isElement(el)) // true
console.log(isElement('not an element')) // false
console.log(isElement(undefined)) // false

// isRegExp
console.log(isRegExp(/[a-z]/)) // true
console.log(isRegExp(new RegExp('a*b', 'g'))) // true
console.log(isRegExp(null)) // false
console.log(isRegExp(undefined)) // false
console.log(isRegExp('')) // false
console.log(isRegExp(42)) // false
console.log(isRegExp({})) // false
console.log(isRegExp([])) // false

// isJSON
const jsonString = '{"name": "John", "age": 30}'
const isJson = isJSON(jsonString)
console.log(isJson) // true
const jsonString1 = '{name: "John", age: 30}'
const isJson1 = isJSON(jsonString1)
console.log(isJson1) // false