import {describe, expect, test} from 'vitest'
import {maskRight, maskLeft, trim, formatString} from '../dist/index.mjs'

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

describe('formatString', () => {
	test('should replace one placeholder with a string', () => {
		expect(formatString('Hello {0}', 'World')).toBe('Hello World')
	})

	test('should replace multiple placeholders with strings', () => {
		expect(formatString('Hello {0}, how are you {1}?', 'John', 'today')).toBe('Hello John, how are you today?')
	})

	test('should leave placeholder unchanged if no argument is provided', () => {
		expect(formatString('Hello {0}')).toBe('Hello {0}')
	})

	test('should replace placeholders with numbers', () => {
		expect(formatString('The number is {0} and the result is {1}', 42, 7)).toBe('The number is 42 and the result is 7')
	})

	test('should handle multiple occurrences of the same placeholder', () => {
		expect(formatString('Repeat {0} twice: {0}{0}', 'test')).toBe('Repeat test twice: testtest')
	})

	test('should handle no placeholders', () => {
		expect(formatString('No placeholders here')).toBe('No placeholders here')
	})

	test('should handle extra arguments without placeholders', () => {
		expect(formatString('Only one placeholder {0}', 'first', 'second')).toBe('Only one placeholder first')
	})
})
