import {describe, expect, it} from 'vitest'
import {dateFormat, isTimeInRange, formatNumber, formatDate, getLatelyDay, getNextDay, getWeekByDay, getLatelyMonth, formatTimestamp, isLeapYear, isDate, formatTimeFromSeconds, isEarlierThanMonth} from '../dist/index.mjs'

describe('dateFormat', () => {
	it('should format date correctly', () => {
		const date = new Date('2021-09-15 12:00:00')
		const format = 'yyyy-MM-dd HH:mm:ss'
		const expected = '2021-09-15 12:00:00'
		expect(dateFormat(date, format)).toBe(expected)
	})
	it('should handle string input correctly', () => {
		const dateStr = '2021-09-15 12:00:00'
		const format = 'dd/MM/yyyy'
		const expected = '15/09/2021'
		expect(dateFormat(dateStr, format)).toBe(expected)
	})
})

describe('date tools', async () => {
	it('dateFormat', () => {
		expect(dateFormat('2023-01-09 20:24:21', 'yyyy') === '2023').toBe(true)
		expect(dateFormat(new Date(), 'yyyy') === '2023').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM') === '2023-05').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM-dd') !== '2023-05-09').toBe(true)
		expect(dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') !== '2023-05-09 20:24:21').toBe(true)
	})

	it('isTimeInRange', () => {
		expect(isTimeInRange(new Date('2023-01-09 20:24:21'), '2023-05-09 20:24:21', '2023-03-22')).toBe(true)
		expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2022-03-22')).toBe(false)
		expect(isTimeInRange(new Date('2023-01-09'), new Date('2023-05-09'), '2022-03-22')).toBe(false)
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

describe('getLatelyMonth', () => {
	it('should return the correct date for one month ago', () => {
		const today = new Date()
		const oneMonthAgo = dateFormat(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()), 'yyyy-MM-dd')
		expect(getLatelyMonth(1)).toBe(oneMonthAgo)
	})

	it('false', () => {
		const today = new Date()
		const oneMonthAgo = dateFormat(new Date(today.getFullYear(), today.getMonth() + 2, today.getDate()), 'yyyy-MM-dd')
		expect(getLatelyMonth(-2)).toBe(oneMonthAgo)
	})
})

describe('formatTimestamp function', () => {
	it('should properly format the timestamp to the specified format', () => {
		const timestamp = new Date('2021-10-31 10:00:00').getTime()
		const format = 'dd/MM/yyyy HH:mm:ss'
		const expectedOutput = '31/10/2021 10:00:00'
		const actualOutput = formatTimestamp(timestamp, format)
		expect(actualOutput).toBe(expectedOutput)
	})
})

describe('isLeapYear function', () => {
	it('should return true for a leap year', () => {
		expect(isLeapYear(2000)).toBe(true)
	})
	it('should return false for a non-leap year', () => {
		expect(isLeapYear(2001)).toBe(false)
	})
	it('should return false for a year divisible by 100 but not by 400', () => {
		expect(isLeapYear(1700)).toBe(false)
	})
	it('should return true for a year divisible by 4 but not by 100', () => {
		expect(isLeapYear(2008)).toBe(true)
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
	it('should format and return formatted time', () => {
		const formattedTime = formatTimeFromSeconds(3600)
		expect(formattedTime).toEqual('1小时0分0秒')
	})
	it('should format and return formatted time with days', () => {
		const formattedTime = formatTimeFromSeconds(100000)
		expect(formattedTime).toEqual('1天3小时46分40秒')
	})
	it('should format and return the formatted time object', () => {
		const formattedTime = formatTimeFromSeconds(100000, true)
		expect(formattedTime).toEqual({days: 1, hours: 3, minutes: 46, seconds: 40})
	})

	it('should return undefined when seconds is not provided', () => {
		const formattedTime = formatTimeFromSeconds(undefined)
		expect(formattedTime).toEqual(undefined)
	})
	it('should return empty string when seconds is 0', () => {
		const formattedTime = formatTimeFromSeconds(0)
		expect(formattedTime).toBeUndefined()
	})
})

describe('isEarlierThanMonth', () => {
	it("should return true if date is earlier than comparisonDate's month", () => {
		const date = new Date('2021-01-15')
		const comparisonDate = new Date('2021-02-01')
		expect(isEarlierThanMonth(date, comparisonDate)).toBe(true)
	})
	it("should return false if date is later than comparisonDate's month", () => {
		const date = new Date('2021-02-15')
		const comparisonDate = new Date('2021-01-01')
		expect(isEarlierThanMonth(date, comparisonDate)).toBe(false)
	})
	it('should return false if date is in the same month as comparisonDate', () => {
		const date = new Date('2021-02-15')
		const comparisonDate = new Date('2021-02-01')
		expect(isEarlierThanMonth(date, comparisonDate)).toBe(false)
	})
})
