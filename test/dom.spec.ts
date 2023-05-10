// Import the Vitest library
import {test, expect, assert} from 'vitest'
// Import the functions to be tested
import {hasClass, addClass, removeClass, toggleClass, getScrollBarWidth} from '../dist/index.mjs'

test('hasClass', () => {
	const element = document.createElement('div')
	element.classList.add('foo')
	assert.strictEqual(hasClass(element, 'foo'), true)

	element.classList.add('bar')
	assert.strictEqual(hasClass(element, 'barxxx'), false)
})

test('addClass', () => {
	const element = document.createElement('div')
	addClass(element, 'foo')
	assert.strictEqual(element.classList.contains('foo'), true)
})

test('removeClass', () => {
	const element = document.createElement('div')
	element.classList.add('bar')
	removeClass(element, 'bar')
	assert.strictEqual(element.classList.contains('bar'), false)

	element.classList.add('remove-class')
	removeClass(element, 'bar')
	assert.strictEqual(element.classList.contains('remove-class'), true)
})

test('toggleClass', () => {
	const element = document.createElement('div')
	element.classList.add('foo')
	toggleClass(element, 'foo')
	assert.strictEqual(element.classList.contains('foo'), false)

	toggleClass(element, 'fooxxxx')
	assert.strictEqual(element.classList.contains('fooxxxx'), true)
})

test('getScrollBarWidth', () => {
	const width = getScrollBarWidth()
	expect(width >= 0).toBe(true)
})
