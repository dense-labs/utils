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
export function dateFormat(date: Date, format: string): string {
	const year = date.getFullYear().toString()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const seconds = date.getSeconds().toString().padStart(2, '0')
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
export function getLatelyDay(n: number): Date {
	let nowDate = new Date().getTime()
	return new Date(nowDate - 1000 * 60 * 60 * 24 * n)
}

/**
 * 获取指定天数后的日期。
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
export function getMonth(monthNumber: number): string {
	let number = monthNumber || 1
	let end = new Date()
	end.setMonth(end.getMonth() - number)
	return end.getFullYear() + '-' + (end.getMonth() + 1 < 10 ? '0' : '') + (end.getMonth() + 1) + '-' + (end.getDate() < 10 ? '0' : '') + end.getDate()
}
