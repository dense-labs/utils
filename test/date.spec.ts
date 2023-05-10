import {test, expect} from 'vitest'
import {dateFormat, isTimeInRange, formatNumber, formatDate, getWeekDay, getNextDay, getWeekByDay, getMonth} from '../dist/index.mjs'

test('dateFormat', () => {
	expect(dateFormat(new Date(), 'yyyy') === '2023').toBe(true)
	expect(dateFormat(new Date(), 'yyyy-MM') === '2023-05').toBe(true)
	expect(dateFormat(new Date(), 'yyyy-MM-dd') !== '2023-05-09').toBe(true)
	expect(dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') !== '2023-05-09 20:24:21').toBe(true)
})

test('isTimeInRange', () => {
	expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22')).toBe(true)
	expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2022-03-22')).toBe(false)
	expect(isTimeInRange('2023-01-09', '2023-05-09', '2022-03-22')).toBe(false)
	expect(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22 23:54:22')).toBe(true)
})
