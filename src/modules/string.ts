/**
 * 去除开头结尾空格
 * @param {string} value
 * @returns
 */
export const trim = (value: string) => value.toString().replace(/^\s+|\s+$/g, '')

/**
 * 将字符串脱敏处理。
 * @param {string} str 要脱敏的字符串。
 * @param {number} start 脱敏开始的位置，默认为 0。
 * @param {number} end 脱敏结束的位置，默认为字符串的末尾。
 * @param {string} mask 脱敏使用的掩码字符，默认为 *。
 * @returns {string} 脱敏后的字符串。
 */
export function maskString(str: string, start = 0, end: number = str.length, mask = '*'): string {
	if (start < 0 || end > str.length || start >= end) {
		throw new Error('Invalid start or end position')
	}
	const maskLength = end - start
	return str.substring(0, start) + mask.repeat(maskLength) + str.substring(end)
}

/**
 * 数据脱敏处理
 * @param value 目标字符串
 * @param startIndex 起始处的索引
 * @param endIndex 终止处的索引
 * @param symbol 替换的字符串，默认为*
 */
export const sensitive = (value: string, startIndex: number, endIndex: number, symbol = '*'): string => {
	if (startIndex < 0 || endIndex > value.length || startIndex >= endIndex) {
		throw new Error('Invalid start or end position')
	}
	const reg = new RegExp(`^(.{${startIndex}})(.{${endIndex - startIndex}})(.${endIndex >= value.length ? '?' : '+'})$`)
	return value.replace(reg, ($0, $1, $2, $3) => $1 + $2.replace(/./g, symbol) + $3)
}

/**
 * 从位置左边开始对数据脱敏处理
 * @param value 目标字符串
 * @param index 索引（从左边开始）
 * @param symbol 替换的字符串，默认为*
 */
export const maskLeft = (value = '', index = 0, symbol = '*') => sensitive(value, 0, index, symbol)

/**
 * 从位置右边开始对数据脱敏处理
 * @param value 目标字符串
 * @param index 索引（从右边开始）
 * @param symbol 替换的字符串，默认为*
 */
export const maskRight = (value = '', index = 0, symbol = '*') => {
	const strL = value.length
	return sensitive(value, index > strL ? 0 : strL - index, strL, symbol)
}
