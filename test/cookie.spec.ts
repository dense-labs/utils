import {describe, expect, test, beforeEach, afterEach} from 'vitest'
import {getCookie, setCookie, deleteCookie, hasCookie} from '../dist/index.mjs'

describe('getCookie', () => {
	beforeEach(() => {
		document.cookie = 'testCookie=testValue'
	})
	afterEach(() => {
		document.cookie = 'testCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
	})
	test('should return the cookie value when the cookie name is found', () => {
		const cookieValue = getCookie('testCookie')
		expect(cookieValue).toEqual('testValue')
	})
	test('should return null when the cookie name is not found', () => {
		const cookieValue = getCookie('nonExistentCookie')
		expect(cookieValue).toBeNull()
	})
})

describe('setCookie', () => {
	test('should set a cookie with given name and value', () => {
		setCookie('name', 'value')
		expect(document.cookie).toContain('name=value')
	})
	test('should set a cookie with given name, value, and expiration date', () => {
		const expires = new Date('2023-11-01')
		setCookie('name', 'value', expires)
		expect(document.cookie).toContain('name=value')
	})
	test('should overwrite an existing cookie with same name', () => {
		setCookie('name', 'oldValue')
		setCookie('name', 'newValue')
		expect(document.cookie).toContain('name=newValue')
	})
})

describe('deleteCookie', () => {
	test('should delete the cookie with the given name', () => {
		// Set up
		document.cookie = 'test=123'
		// Act
		deleteCookie('test')
		// Assert
		expect(document.cookie).not.toContain('test=123')
	})
	test('should do nothing if the cookie with the given name does not exist', () => {
		// Set up
		document.cookie = 'test=123'
		// Act
		deleteCookie('nonexistent')
		// Assert
		expect(document.cookie).toContain('test=123')
	})
})

describe('hasCookie', () => {
	beforeEach(() => {
		// Set up document.cookie for each test
		document.cookie = 'foo=bar; path=/'
		document.cookie = 'baz=qux; path=/'
	})
	afterEach(() => {
		// Clear document.cookie after each test
		document.cookie.split(';').forEach((c) => {
			document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
		})
	})
	test('should return true if the cookie exists', () => {
		expect(hasCookie('foo')).toBe(true)
		expect(hasCookie('baz')).toBe(true)
	})
	test('should return false if the cookie does not exist', () => {
		expect(hasCookie('nonexistent')).toBe(false)
	})
})
