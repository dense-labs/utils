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
 * 从字符串左侧开始对指定数量的字符进行脱敏处理
 * @param str 目标字符串
 * @param numChars 需要脱敏的字符数量
 * @param symbol 替换的字符串，默认为 *
 * @throws 当 numChars 小于等于 0 时，抛出错误
 * @returns 脱敏后的字符串
 */
export function maskLeft(str: string, numChars: number, symbol = '*'): string {
	if (numChars <= 0) {
		throw new Error('Invalid number of characters')
	}
	numChars = numChars > str.length ? str.length : numChars
	return symbol.repeat(numChars) + str.slice(numChars)
}

/**
 * 从字符串右侧开始对指定数量的字符进行脱敏处理
 * @param str 目标字符串
 * @param numChars 需要脱敏的字符数量
 * @param symbol 替换的字符串，默认为 *
 * @throws 当 numChars 小于等于 0 时，抛出错误
 * @returns 脱敏后的字符串
 */
export function maskRight(str: string, numChars: number, symbol = '*'): string {
	if (numChars <= 0) {
		throw new Error('Invalid number of characters')
	}
	numChars = numChars > str.length ? str.length : numChars
	return str.slice(0, -numChars) + symbol.repeat(numChars)
}
