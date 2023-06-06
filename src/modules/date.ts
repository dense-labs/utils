/**
 * 将给定的日期格式化为指定格式的字符串。
 * @param date 要格式化的日期。
 * @param format 格式化字符串，可以包含以下占位符：
 *   - YYYY：四位数的年份。
 *   - MM：两位数的月份（01-12）。
 *   - dd：两位数的日期（01-31）。
 *   - HH：两位数的小时（00-23）。
 *   - mm：两位数的分钟（00-59）。
 *   - ss：两位数的秒数（00-59）。
 * @returns 格式化后的日期字符串。
 */
export function dateFormat(date: Date | string, format: string): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date
	const year = dateObj.getFullYear().toString()
	const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
	const day = dateObj.getDate().toString().padStart(2, '0')
	const hours = dateObj.getHours().toString().padStart(2, '0')
	const minutes = dateObj.getMinutes().toString().padStart(2, '0')
	const seconds = dateObj.getSeconds().toString().padStart(2, '0')
	const replacements: Record<string, string> = {
		yyyy: year,
		MM: month,
		dd: day,
		HH: hours,
		mm: minutes,
		ss: seconds
	}

	const regex = new RegExp(Object.keys(replacements).join('|'), 'g')

	const formatted = format.replace(regex, (match) => replacements[match])

	return formatted
}

/**
 * 判断给定的时间是否在指定的时间范围内。
 * @param startTime 开始时间，可以是 Date 对象或日期字符串。
 * @param endTime 结束时间，可以是 Date 对象或日期字符串。
 * @param targetTime 目标时间，可以是 Date 对象或日期字符串。
 * @returns 如果目标时间在指定时间范围内，则返回 true；否则返回 false。
 */
export function isTimeInRange(startTime: Date | string, endTime: Date | string, targetTime: Date | string): boolean {
	startTime = new Date(startTime)
	endTime = new Date(endTime)
	targetTime = new Date(targetTime)

	if (!(startTime instanceof Date) || !(endTime instanceof Date) || !(targetTime instanceof Date)) {
		throw new Error('参数必须为Date对象或日期字符串')
	}

	if (startTime > endTime) {
		throw new Error('范围开始时间不能晚于范围结束时间')
	}

	return targetTime >= startTime && targetTime <= endTime
}
/**
 * 格式化数字为两位数的字符串。
 * @param n 要格式化的数字。
 * @returns 格式化后的字符串。
 */
export function formatNumber(n: any): string {
	n = n.toString()
	return n[1] ? n : '0' + n
}

/**
 * 格式化日期为年月日格式的字符串。
 * @param date 要格式化的日期。
 * @returns 格式化后的字符串。
 */
export function formatDate(date: Date): string {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	return [year, month, day].map(formatNumber).join('-')
}

/**
 * 获取最近 n 天的日期。
 * @param n 要获取的天数。
 * @returns 最近 n 天的日期。
 */
export function getLatelyDay(n: number | 0): Date {
	let nowDate = new Date().getTime()
	return new Date(nowDate - 1000 * 60 * 60 * 24 * n)
}

/**
 * 获取当前天数后的日期。
 * @param n 要获取的天数。
 * @returns 指定天数后的日期。
 */
export function getNextDay(n: number | 0): string {
	let nextDate = formatDate(new Date(new Date().getTime() + n * 24 * 60 * 60 * 1000)) // 后一天
	return nextDate
}

/**
 * 根据日期字符串获取星期几。
 * @param dateString 日期字符串，格式为：YYYY-MM-DD。
 * @returns 星期几。
 */
export function getWeekByDay(dateString: string): string {
	if (!dateString) return ''
	let [year, month, day] = dateString.split('-').map(Number)
	let date = new Date(year, month - 1, day)
	return '星期' + '日一二三四五六'.charAt(date.getDay())
}

/**
 * 获取最近 n 个月的日期。
 * @param monthNumber 要获取的月数。
 * @returns 最近 n 个月的日期。
 */
export function getLatelyMonth(monthNumber: number): string {
	let number = monthNumber || 1
	let end = new Date()
	end.setMonth(end.getMonth() - number)
	return end.getFullYear() + '-' + (end.getMonth() + 1 < 10 ? '0' : '') + (end.getMonth() + 1) + '-' + (end.getDate() < 10 ? '0' : '') + end.getDate()
}

/**
 * 把时间戳格式化成日期
 * @param timestamp 时间戳
 * @param format 默认格式 yyyy-MM-dd HH:mm:ss
 * @returns 格式化后的日期
 */
export function formatTimestamp(timestamp: number, format = 'yyyy-MM-dd HH:mm:ss'): string {
	const date = new Date(timestamp)
	return dateFormat(date, format)
}
/**
 * 判断是否是闰年
 * @param year 年份
 * @returns 是否是闰年
 */
export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * 判断一个字符串是否为有效的日期格式。
 * @param str 要检查的字符串。
 * @returns 如果字符串是有效的日期格式，则返回 true；否则返回 false。
 */
export function isDate(str: string | Date): boolean {
	if (!str || (typeof str === 'string' && isNaN(Date.parse(str)))) {
		return false
	}
	const date = new Date(str)
	if (date.toString() === 'Invalid Date') {
		return false
	}
	return !isNaN(date.getTime())
}
/**
 * 将给定的秒数转换成格式为 "X天X小时X分X秒" 的时间字符串。
 * @param seconds 要转换的秒数。
 * @returns 格式为 "X天X小时X分X秒" 的时间字符串。
 */
interface FormattedTime {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export function formatTimeFromSeconds(seconds: number, isCustom = false): FormattedTime | undefined | string {
	if (!seconds) {
		return undefined
	}
	const days = Math.floor(seconds / (3600 * 24))
	seconds %= 3600 * 24
	const hours = Math.floor(seconds / 3600)
	seconds %= 3600
	const minutes = Math.floor(seconds / 60)
	seconds %= 60 // 计算剩余的秒数
	if (isCustom) {
		return {days, hours, minutes, seconds}
	}
	return `${days > 0 ? days + '天' : ''}${hours}小时${minutes}分${seconds}秒`
}

/**
 * 判断指定日期是否在另一个日期的月份之前
 *
 * @param {Date} date - 要比较的日期
 * @param {Date} comparisonDate - 要进行比较的日期
 * @return {boolean} 如果指定的日期在另一个日期的月份之前，则返回true；否则，返回false。
 */
export function isEarlierThanMonth(date: Date, comparisonDate: Date): boolean {
	const comparisonMonth = new Date(comparisonDate.getFullYear(), comparisonDate.getMonth(), 1)
	return date < comparisonMonth
}

/**
 * 获取当前年份前后指定年份数组成的数组
 * @param currentYear 当前年份，默认为当前时间的年份
 * @param numYearsBefore 当前年份前的年数
 * @param numYearsAfter 当前年份后的年数
 * @returns 由当前年份前后指定年份数组成的数组
 * @throws 当numYearsBefore或numYearsAfter小于0时，抛出错误
 */
export function getYearsAroundCurrent(numYearsBefore: number, numYearsAfter: number, currentYear = new Date().getFullYear()): number[] {
	if (numYearsBefore < 0 || numYearsAfter < 0) {
		throw new Error('yearsBefore or yearsAfter Must be a positive integer ')
	}
	// const currentYear = new Date().getFullYear()
	const numYearsTotal = numYearsBefore + numYearsAfter + 1
	return Array.from({length: numYearsTotal}, (_, i) => currentYear - numYearsBefore + i)
}
