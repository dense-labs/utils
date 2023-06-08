import {describe, test, expect, expectTypeOf} from 'vitest'
import {genRandomColor} from '../dist/index.mjs'
describe('genRandomColor', () => {
	test('returns a random RGB color string when no type is specified', () => {
		const result = genRandomColor()
		expect(result).toMatch(/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/)
	})

	test('returns a random HSL color string when type is "hsl"', () => {
		const result = genRandomColor('hsl')
		expect(result).toMatch(/^hsl\(\d{1,3},\d{1,3}%,\d{1,3}%\)$/)
	})

	test('returns a random HSLA color string when type is "hsla"', () => {
		const result = genRandomColor('hsla')
		expect(result).toMatch(/^hsla\(\d{1,3},\d{1,3}%,\d{1,3}%,0\.\d\)$/)
	})

	test('returns a random RGB color string when type is "rgb"', () => {
		const result = genRandomColor('rgb')
		expect(result).toMatch(/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/)
	})

	test('returns a random RGBA color string when type is "rgba"', () => {
		const result = genRandomColor('rgba')
		expect(result).toMatch(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[0-1]?(\.\d+)?\s*\)/)
	})

	test('returns a random 16-bit color string when type is "16" or 16', () => {
		const result1 = genRandomColor('16')
		const result2 = genRandomColor(16)
		expect(result1).toMatch(/^#[0-9a-f]{6}$/i)
		expect(result2).toMatch(/^#[0-9a-f]{6}$/i)
	})

	test('returns undefined when an invalid type is specified', () => {
		const result = genRandomColor('invalid type')
		expect(result).toBeUndefined()
	})
})
