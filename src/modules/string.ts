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
 * @throws 当 numChars 小于 0 时，抛出错误
 * @returns 脱敏后的字符串
 */
export function maskLeft(str: string, numChars: number, symbol = '*'): string {
	if (numChars < 0) {
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
 * @throws 当 numChars 小于 0 时，抛出错误
 * @returns 脱敏后的字符串
 */
export function maskRight(str: string, numChars: number, symbol = '*'): string {
	if (numChars < 0) {
		throw new Error('Invalid number of characters')
	}
	numChars = numChars > str.length ? str.length : numChars
	return numChars === 0 ? str : str.slice(0, -numChars) + symbol.repeat(numChars)
}

/**
 * 格式化字符串，替换其中的占位符 {index} 为相应的参数值
 * @param str 要格式化的字符串，包含零个或多个占位符 {index}
 * @param args 一个或多个参数，用于替换字符串中的占位符
 */
export function formatString(str: string, ...args: (string | number)[]): string {
	return str.replace(/\{(\d+)\}/g, (substring, index) => {
		// 获取与当前匹配的占位符对应的参数
		const arg = args[index]

		// 如果参数索引在 args 数组的范围内，且参数不为 undefined
		if (index in args) {
			// 将参数转换为字符串并返回，无论它是 string 还是 number 类型
			return arg.toString()
		}

		// 如果索引超出范围，返回原始的占位符字符串
		return substring
	})
}
