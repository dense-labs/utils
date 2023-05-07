import {test, expect, expectTypeOf} from 'vitest'
import {getRandomColor, rgbToHex, rgbToRgba} from '../dist/index.mjs'
test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
})
test('getRandomColor', (assert) => {
	const color = getRandomColor()
	expectTypeOf(color).toBeString()
})

test('rgbToHex', (assert) => {
	expect(rgbToHex('rgb(123, 45, 67)') === '#7b2d43').toBe(true)
	expect(rgbToHex('rgb(255, 255, 255)') === '#ffffff').toBe(true)
	expect(rgbToHex('rgb(0, 0, 0)') === '#000000').toBe(true)
})

test('rgbToRgba', (assert) => {
	expect(rgbToRgba('rgb(123, 45, 67)', 0.5) === 'rgba(123, 45, 67, 0.51)').toBe(true)
	expect(rgbToRgba('rgb(255, 255, 255)', '0.75') === 'rgba(255, 255, 255, 0.75)').toBe(true)
	expect(rgbToRgba('rgb(0, 0, 0)', 1) === 'rgba(0, 0, 0, 1)').toBe(true)
})
