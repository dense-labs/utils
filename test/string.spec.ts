import {describe, expect, test} from 'vitest'
import {maskRight, maskLeft, trim} from '../dist/index.mjs'

describe('maskLeft', () => {
	test('should mask the left side of the string with the given symbol', () => {
		expect(maskLeft('1234567890', 4, '*')).toBe('****567890')
	})
	test('should throw an error if the number of characters is less than or equal to zero', () => {
		expect(maskLeft('1234567890', 0, '*')).toBe('1234567890')
	})
	test('should return the original string if the number of characters is greater than the length of the string', () => {
		expect(maskLeft('1234567890', 12, '*')).toBe('**********')
	})

	test('should toThrow', () => {
		expect(() => maskLeft('1234567890', -2)).toThrow('Invalid number of characters')
	})
})

describe('maskRight', () => {
	test('should mask the right side of the string with the given symbol', () => {
		expect(maskRight('1234567890', 4, '*')).toBe('123456****')
	})
	test('should throw an error if the number of characters is less than or equal to zero', () => {
		expect(maskRight('1234567890', 0, '*')).toBe('1234567890')
	})
	test('should return the original string if the number of characters is greater than the length of the string', () => {
		expect(maskRight('1234567890', 20, '*')).toBe('**********')
	})

	test('should toThrow', () => {
		expect(() => maskRight('1234567890', -2)).toThrow('Invalid number of characters')
	})
})

describe('trim', () => {
	test('should remove leading and trailing whitespaces', () => {
		expect(trim('  hello world  ')).toBe('hello world')
	})
	test('should return empty string for input with only whitespaces', () => {
		expect(trim('   ')).toBe('')
	})
	test('should return input string if it does not have leading/trailing whitespaces', () => {
		expect(trim('hello world')).toBe('hello world')
	})
	test('should return input string if it is already an empty string', () => {
		expect(trim('')).toBe('')
	})
	test('should convert non-string input to string and remove leading/trailing whitespaces', () => {
		expect(trim(123)).toBe('123')
	})
})
