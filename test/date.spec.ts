import {describe, expect, it} from 'vitest'
import {dateFormat, isTimeInRange, formatNumber, formatDate, getLatelyDay, getNextDay, getWeekByDay, getMonth, isDate, formatTimeFromSeconds} from '../dist/index.mjs'

describe('date tools', async () => {
	it('dateFormat', () => {
		expect(dateFormat('2023-01-09 20:24:21', 'yyyy') === '2023').toBe(true)
		expect(dateFormat(new Date(), 'yyyy') === '2023').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM') === '2023-05').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM-dd') !== '2023-05-09').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') !== '2023-05-09 20:24:21').toBe(true)
	})

	it('isTimeInRange', () => {
		expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22')).toBe(true)
		expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2022-03-22')).toBe(false)
		expect(isTimeInRange('2023-01-09', '2023-05-09', '2022-03-22')).toBe(false)
		expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22 23:54:22')).toBe(true)
	})
})
describe('formatNumber', () => {
	it('should format a number with less than two digits as a two digit string', () => {
		expect(formatNumber(5)).toBe('05')
	})
	it('should not change a number with two digits', () => {
		expect(formatNumber(15)).toBe('15')
	})
})

describe('formatDate', () => {
	it('should format a date as "YYYY-MM-dd"', () => {
		const date = new Date('2021-01-01T00:00:00.000Z')
		expect(formatDate(date)).toBe('2021-01-01')
	})
})

describe('getLatelyDay', () => {
	it('should return the correct date for the current day of the week', () => {
		const today = new Date()
		expect(getLatelyDay(0)).toEqual(today)
	})
	it('should return the correct date for one week ago', () => {
		const today = new Date()
		const oneWeekAgo = dateFormat(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd HH:mm:ss')
		expect(dateFormat(getLatelyDay(7), 'yyyy-MM-dd HH:mm:ss')).toEqual(oneWeekAgo)
	})
})

describe('getNextDay', () => {
	it('should return the correct date for tomorrow', () => {
		const today = new Date()
		const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
		expect(getNextDay(1)).toBe(tomorrow.toISOString().substring(0, 10))
	})
})

describe('getWeekByDay', () => {
	it('should return the correct day of the week for a given date', () => {
		expect(getWeekByDay('2023-05-10')).toBe('星期三')
	})
})

describe('getMonth', () => {
	it('should return the correct date for one month ago', () => {
		const today = new Date()
		const oneMonthAgo = dateFormat(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()), 'yyyy-MM-dd')
		expect(getMonth(1)).toBe(oneMonthAgo)
	})

	it('false', () => {
		const today = new Date()
		const oneMonthAgo = dateFormat(new Date(today.getFullYear(), today.getMonth() + 2, today.getDate()), 'yyyy-MM-dd')
		expect(getMonth(-2)).toBe(oneMonthAgo)
	})
})

describe('isDate', () => {
	it('true', () => {
		expect(isDate('2022-01-01')).toBe(true)
		expect(isDate('Sat Jan 01 2022')).toBe(true)

		expect(isDate(new Date())).toBe(true)
		expect(isDate(new Date('2022-01-01'))).toBe(true)
	})

	it('false', () => {
		expect(isDate('')).toBe(false)
		expect(isDate('foo')).toBe(false)
	})
})

describe('formatTimeFromSeconds', () => {
	it('returns an object with correct properties', () => {
		const result = formatTimeFromSeconds(123456)
		expect(result).toHaveProperty('days')
		expect(result).toHaveProperty('hours')
		expect(result).toHaveProperty('minutes')
		expect(result).toHaveProperty('seconds')
	})

	it('returns the correct values', () => {
		const result = formatTimeFromSeconds(123456)
		expect(result).toEqual({days: 1, hours: 10, minutes: 17, seconds: 36})
	})

	it('returns undefined for falsy input', () => {
		expect(formatTimeFromSeconds(undefined)).toBeUndefined()
		expect(formatTimeFromSeconds(null)).toBeUndefined()
		expect(formatTimeFromSeconds(0)).toBeUndefined()
		expect(formatTimeFromSeconds('')).toBeUndefined()
	})
})
