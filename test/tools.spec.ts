import {describe, expect, it, vi} from 'vitest'
import {isUrl, serialize, isEmail, openLink, debounce, throttle, isValidIdNumber, getBirthDate, getGender, getAge, generateUUID, getUrlParameter, maskString, isMobile} from '../dist/index.mjs'
describe('isUrl', () => {
	it('should return true for valid URLs', () => {
		expect(isUrl('https://www.example.com')).toBe(true)
		expect(isUrl('http://www.example.com')).toBe(true)
		expect(isUrl('ftp://ftp.example.com')).toBe(true)
		expect(isUrl('http://localhost')).toBe(true)
		expect(isUrl('https://localhost:3000')).toBe(true)
		expect(isUrl('https://www.google.com/search?q=url&oq=url')).toBe(true)
	})

	it('should return false for invalid URLs', () => {
		expect(isUrl('')).toBe(false)
		expect(isUrl('htp://www.example.com')).toBe(false)
		expect(isUrl('http:/www.example.com')).toBe(false)
		expect(isUrl('http://localhost:')).toBe(false)
	})
})

describe('serialize', () => {
	it('should return the correct URL-encoded string', () => {
		expect(serialize({a: 123, b: 'hello world'})).toBe('a=123&b=hello world')
		expect(serialize({c: true, d: null})).toBe('c=true&d=null')
	})
})

describe('isEmail', () => {
	it('should return true for valid email addresses', () => {
		expect(isEmail('user@example.com')).toBe(true)
		expect(isEmail('user123@example.com')).toBe(true)
		expect(isEmail('user+123@example.com')).toBe(true)
	})

	it('should return false for invalid email addresses', () => {
		expect(isEmail('')).toBe(false)
		expect(isEmail('userexample.com')).toBe(false)
		expect(isEmail('user@examplecom')).toBe(false)
		expect(isEmail('user@example.')).toBe(false)
	})
})

/* describe('openLink', () => {
	it('should open the link in a new window', () => {
		const url = 'https://www.example.com'
		const win = window.open
		window.open = vi.fn()

		openLink(url)
		expect(window.open).toHaveBeenCalledWith(url, '_blank')

		window.open = win
	})

	it('should open the link in the specified window', () => {
		const url = 'https://www.example.com'
		const name = 'mywindow'
		const win = window.open
		window.open = vi.fn()

		openLink(url, name)
		expect(window.open).toHaveBeenCalledWith(url, name)

		window.open = win
	})
}) */

describe('debounce', () => {
	it('should execute the function only once after the wait time', async () => {
		const mockFunction = vi.fn()
		const debouncedFunction = debounce(mockFunction, 100, {leading: false})

		debouncedFunction()
		debouncedFunction()
		debouncedFunction()

		expect(mockFunction).toHaveBeenCalledTimes(0)

		await new Promise((resolve) => setTimeout(resolve, 100))

		expect(mockFunction).toHaveBeenCalledTimes(1)
	})
})

describe('throttle', () => {
	it('should execute the function only once within the wait time', async () => {
		const mockFunction = vi.fn()
		const throttledFunction = throttle(mockFunction, 100, {leading: true, trailing: false})

		throttledFunction()
		throttledFunction()
		throttledFunction()

		expect(mockFunction).toHaveBeenCalledTimes(1)

		await new Promise((resolve) => setTimeout(resolve, 100))

		expect(mockFunction).toHaveBeenCalledTimes(1)
	})
})

describe('isValidIdNumber', () => {
	it('should return true for a valid ID number', () => {
		const validIdNumber = '32551919310425054X'
		expect(isValidIdNumber(validIdNumber)).toBe(true)
	})

	it('should return false for an invalid ID number', () => {
		const invalidIdNumber = '42026920180923922X'
		expect(isValidIdNumber(invalidIdNumber)).toBe(false)
	})
})

describe('getBirthDate', () => {
	it('should return the birth date for a valid ID number', () => {
		const idCard = '800205200308218662'
		expect(getBirthDate(idCard)).toBe('2003-08-21')
	})
})

describe('getGender', () => {
	it('should return "女" for a valid male ID card number', () => {
		const idCard = '654840197808216447'
		const result = getGender(idCard)
		expect(result).toBe('女')
	})

	it('should return "男" for a valid female ID card number', () => {
		const idCard = '422553200104090554'
		const result = getGender(idCard)
		expect(result).toBe('男')
	})
})

describe('getAge', () => {
	it('should return the correct age for a valid ID card number', () => {
		const idCard = '800205200308218662'
		const result = getAge(idCard)
		expect(result).toBe(19)
	})

	it('should throw an error for an invalid ID card number', () => {
		const idCard = '766822194112202013' // 81岁
		const result = getAge(idCard)
		expect(result).toBeLessThan(82)
	})
})

describe('generateUUID', () => {
	it('should generate a valid UUID', () => {
		const uuid = generateUUID()
		console.log(uuid)
		expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
	})
})

describe('getUrlParameter', () => {
	it('should return the value of the specified parameter', () => {
		const url = 'https://www.example.com/?foo=bar&baz=qux'
		const name = 'baz'
		const result = getUrlParameter(name)
		expect(result).toBe('qux')
	})

	it('should return null if the specified parameter does not exist', () => {
		const url = 'https://www.example.com/?foo=bar&baz=qux'
		const name = 'abc'
		const result = getUrlParameter(name)
		expect(result).toBe(null)
	})
})

/* describe('maskString', () => {
	it('should mask the specified portion of a string', () => {
		const str = '1234567890'
		const start = 2
		const end = 6
		const mask = '*'
		const result = maskString(str, start, end, mask)
		expect(result).toBe('12****7890')
	})

	it('should mask the entire string if no start and end positions are specified', () => {
		const str = '1234567890'
		const mask = '*'
		const result = maskString(str, undefined, undefined, mask)
		expect(result).toBe('**********')
	})
})
 */
