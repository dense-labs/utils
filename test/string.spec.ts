import {describe, expect, test} from 'vitest'
import {maskRight, maskLeft, trim, sensitive} from '../dist/index.mjs'

describe('maskRight', () => {
	test('should return the original string if length is less than index', () => {
		expect(maskRight('123', 4)).toBe('123')
	})
	test('should mask the right side of the string with the given symbol', () => {
		expect(maskRight('1234567890', 6, '*')).toBe('1234*******')
	})
	test('should mask the entire string if index is 0', () => {
		expect(maskRight('1234567890', 0, '*')).toBe('**********')
	})
	test('should return an empty string if value is not provided', () => {
		expect(maskRight()).toBe('')
	})
})

describe('maskLeft', () => {
	test('should return the original string if index is 0', () => {
		expect(maskLeft('1234567890', 0, '*')).toBe('1234567890')
	})
	test('should mask the left side of the string with the given symbol', () => {
		expect(maskLeft('1234567890', 6, '*')).toBe('******7890')
	})
	test('should return an empty string if value is not provided', () => {
		expect(maskLeft()).toBe('')
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

describe('sensitive', () => {
	test('should replace characters in the specified range with asterisks', () => {
		expect(sensitive('password123', 4, 7)).toBe('pass****123')
		expect(sensitive('password123', 0, 3)).toBe('***sword123')
		expect(sensitive('password123', 9, 12)).toBe('password***')
	})
	test('should throw an error for invalid start or end position', () => {
		expect(() => sensitive('password123', -1, 7)).toThrow('Invalid start or end position')
		expect(() => sensitive('password123', 4, 4)).toThrow('Invalid start or end position')
		expect(() => sensitive('password123', 7, 13)).toThrow('Invalid start or end position')
	})
	test('should replace characters with the specified symbol', () => {
		expect(sensitive('password123', 4, 7, '-')).toBe('pass---d123')
		expect(sensitive('password123', 0, 3, '*')).toBe('****word123')
		expect(sensitive('password123', 9, 12, '_')).toBe('password___')
	})
	test('should replace characters until the end of the string if endIndex is greater than the length of the string', () => {
		expect(sensitive('password123', 4, 15)).toBe('pass********')
		expect(sensitive('password123', 0, 9)).toBe('*********23')
	})
})
