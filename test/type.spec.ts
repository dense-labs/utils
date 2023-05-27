import {test, expect, describe} from 'vitest'
import {isUndefined, isNull, isString, isNumber, isBoolean, isSymbol, isBigInt, isObject, isPlainObject, isArray, isFunction, isElement} from '../dist/index.mjs'

test('isUndefined', () => {
	expect(isUndefined(undefined) === true).toBe(true)
	expect(isUndefined(null) === false).toBe(true)
	expect(isUndefined(0) === false).toBe(true)
})

test('isNull', () => {
	expect(isNull(null) === true).toBe(true)
	expect(isNull(undefined) === false).toBe(true)
	expect(isNull(false) === false).toBe(true)
})

test('isUndefined', () => {
	expect(isUndefined(undefined) === true).toBe(true)
	expect(isUndefined(null) === false).toBe(true)
	expect(isUndefined(0) === false).toBe(true)
})

test('isNull', () => {
	expect(isNull(null) === true).toBe(true)
	expect(isNull(undefined) === false).toBe(true)
	expect(isNull(false) === false).toBe(true)
})

test('isString', () => {
	expect(isString('') === true).toBe(true)
	expect(isString('hello') === true).toBe(true)
	expect(isString(123) === false).toBe(true)
})

test('isNumber', () => {
	expect(isNumber(0) === true).toBe(true)
	expect(isNumber(1.23) === true).toBe(true)
	expect(isNumber('123') === false).toBe(true)
})

test('isBoolean', () => {
	expect(isBoolean(true) === true).toBe(true)
	expect(isBoolean(false) === true).toBe(true)
	expect(isBoolean(null) === false).toBe(true)
})

test('isSymbol', () => {
	const sym1 = Symbol('foo')
	const sym2 = Symbol('bar')
	expect(isSymbol(sym1) === true).toBe(true)
	expect(isSymbol(sym2) === true).toBe(true)
	expect(isSymbol('baz') === false).toBe(true)
})

test('isBigInt', () => {
	expect(isBigInt(BigInt(123)) === true).toBe(true)
	expect(isBigInt(123) === false).toBe(true)
	expect(isBigInt('123') === false).toBe(true)
})

test('isObject', () => {
	expect(isObject(null) === false).toBe(true)
	expect(isObject(undefined) === false).toBe(true)
	expect(isObject({}) === true).toBe(true)
})

test('isPlainObject', () => {
	expect(isPlainObject(null) === false).toBe(true)
	expect(isPlainObject(undefined) === false).toBe(true)
	expect(isPlainObject({}) === true).toBe(true)
	expect(isPlainObject(new Date()) === false).toBe(true)
})

test('isArray', () => {
	expect(isArray([]) === true).toBe(true)
	expect(isArray('123'.split('')) === true).toBe(true)
	expect(isArray('') === false).toBe(true)
})
test('isFunction', () => {
	expect(isFunction(function () {}) === true).toBe(true)
	expect(isFunction(() => {}) === true).toBe(true)
	expect(isFunction(Function) === true).toBe(true)
	expect(isFunction({}) === false).toBe(true)
})

describe('isElement', () => {
	test('should return true for an Element', () => {
		const el = document.createElement('div')
		expect(isElement(el)).toBe(true)
	})
	test('should return false for a non-Element value', () => {
		expect(isElement('not an element')).toBe(false)
	})
	test('should return false for undefined value', () => {
		expect(isElement(undefined)).toBe(false)
	})
})
