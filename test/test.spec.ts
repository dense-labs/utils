import {test, expect} from 'vitest'
import {getRandomColor, rgbToHex, rgbToRgba} from '../dist/index.mjs'
test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
})
test('getRandomColor', (assert) => {
	const color = getRandomColor()
	assert(typeof color === 'string')

	assert(color.match(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/))
})
