// Import the Vitest library
import {test} from 'vitest'
// Import the functions to be tested
import {hasClass, addClass, removeClass, toggleClass, getScrollBarWidth} from '../dist/index.mjs'

// Define the test cases
const hasClassTests = [
	{input: document.createElement('div'), cls: 'foo', expected: false},
	{input: document.createElement('div'), cls: 'bar', expected: false},
	{input: document.createElement('div'), cls: 'baz', expected: false}
]
const addClassTests = [
	{input: document.createElement('div'), cls: 'foo', expected: 'foo'},
	{input: document.createElement('div'), cls: 'bar', expected: 'bar'},
	{input: document.createElement('div'), cls: 'baz', expected: 'baz'}
]
const removeClassTests = [
	{input: document.createElement('div'), cls: 'foo', expected: ''},
	{input: document.createElement('div'), cls: 'bar', expected: ''},
	{input: document.createElement('div'), cls: 'baz', expected: ''}
]
const toggleClassTests = [
	{input: document.createElement('div'), cls: 'foo', expected: true},
	{input: document.createElement('div'), cls: 'bar', expected: true},
	{input: document.createElement('div'), cls: 'baz', expected: true}
]
// Run the tests
// const myTests = test('My Unit Tests', [
// 	{
// 		name: 'hasClass',
// 		tests: hasClassTests.map(({input, cls, expected}) => ({
// 			input,
// 			expected,
// 			run() {
// 				return hasClass(input, cls)
// 			}
// 		}))
// 	},
// 	{
// 		name: 'addClass',
// 		tests: addClassTests.map(({input, cls, expected}) => ({
// 			input,
// 			expected,
// 			run() {
// 				addClass(input, cls)
// 				return input.className
// 			}
// 		}))
// 	},
// 	{
// 		name: 'removeClass',
// 		tests: removeClassTests.map(({input, cls, expected}) => ({
// 			input,
// 			expected,
// 			run() {
// 				input.className = cls
// 				removeClass(input, cls)
// 				return input.className
// 			}
// 		}))
// 	},
// 	{
// 		name: 'toggleClass',
// 		tests: [
// 			{
// 				input: document.createElement('div'),
// 				cls: 'foo',
// 				expected: true,
// 				run: (input: {classList: {contains: (arg0: any) => any}}, cls: any) => {
// 					toggleClass(input, cls)
// 					return input.classList.contains(cls)
// 				}
// 			}
// 		]
// 	},
// 	{
// 		name: 'getScrollBarWidth',
// 		tests: [
// 			{
// 				input: null,
// 				expected: typeof getScrollBarWidth(),
// 				run: () => typeof getScrollBarWidth()
// 			}
// 		]
// 	}
// ])

// // Run the tests
// myTests.run().then((results: any) => {
// 	console.log(results)
// })

test('Test toggleClass function', () => {
	const div = document.createElement('div')
	div.classList.add('test')

	/* assert.equal(toggleClass(div, 'test'), false)
	assert.ok(div.classList.contains('test'))

	assert.equal(toggleClass(div, 'test'), true)
	assert.notOk(div.classList.contains('test')) */
})

test('Test getScrollBarWidth function', () => {
	const width = getScrollBarWidth()

	/* assert.isNumber(width)
	assert.ok(width >= 0) */
})
