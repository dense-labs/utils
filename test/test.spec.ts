import {test, expect} from 'vitest'
import {getRandomColor, rgbToHex, rgbToRgba} from '../dist/index.mjs'
test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
})
test('getRandomColor', (assert) => {
	const color = getRandomColor()
	console.log(assert)
	// assert(typeof color === 'string')
})

test('rgbToHex', (assert) => {
	assert(rgbToHex('rgb(123, 45, 67)') === '#7b2d43')
	assert(rgbToHex('rgb(255, 255, 255)') === '#ffffff')
	assert(rgbToHex('rgb(0, 0, 0)') === '#000000')
})

test('rgbToRgba', (assert) => {
	assert(rgbToRgba('rgb(123, 45, 67)', 0.5) === 'rgba(123, 45, 67, 0.5)')
	assert(rgbToRgba('rgb(255, 255, 255)', '0.75') === 'rgba(255, 255, 255, 0.75)')
	assert(rgbToRgba('rgb(0, 0, 0)', 1) === 'rgba(0, 0, 0, 1)')
})
