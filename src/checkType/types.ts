export type AnyFunction = (...args: any[]) => any
/**
 * 获取 `value` 的 toString 标签。
 *
 * @param value 要查询的值。
 * @returns toString 标签。
 */
function getTag(value: unknown): string {
	return Object.prototype.toString.call(value)
}

/**
 * 检查 `value` 是否为 `undefined`。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为 `undefined` 则返回 `true`。
 */
export function isUndefined(value: unknown): value is undefined {
	return value === undefined
}

/**
 * 检查 `value` 是否为 `null`。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为 `null` 则返回 `true`。
 */
export function isNull(value: unknown): value is null {
	return value === null
}

/**
 * 检查 `value` 是否为字符串。
 *
 * @param value 要检查的值。
 * @returns 如果值为字符串则返回 `true`，否则返回 `false`。
 */
export function isString(value: unknown): value is string {
	return getTag(value) === '[object String]'
}

/**
 * 检查 `value` 是否为数字。
 *
 * @param value 要检查的值。
 * @returns 如果值为数字则返回 `true`，否则返回 `false`。
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' || (typeof value === 'object' && value instanceof Number)
}

/**
 * 检查 `value` 是否为布尔值。
 *
 * @param value 要检查的值。
 * @returns 如果值为布尔值则返回 `true`，否则返回 `false`。
 */
export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean'
}

/**
 * 检查 `value` 是否为符号。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为符号则返回 `true`。
 */
export function isSymbol(value: unknown): value is symbol {
	const type = typeof value
	return type == 'symbol' || (type === 'object' && !isNull(value) && getTag(value) === '[object Symbol]')
}

/**
 * 检查 `value` 是否为 `BigInt` 类型。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为 `BigInt`，则返回 `true`。
 */
export function isBigInt(value: unknown): value is bigint {
	return typeof value === 'bigint'
}

/**
 * 检查 `value` 是否为对象。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为对象，则返回 `true`。
 */
export function isObject(value: unknown): value is Record<string, unknown> {
	const type = typeof value
	return !isNull(value) && (type === 'object' || type === 'function')
}

/**
 * 检查 `value` 是否为普通对象。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为普通对象，则返回 `true`。
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
	if (!isObject(value)) return false

	let proto = value
	while (!isNull(Object.getPrototypeOf(proto))) {
		proto = Object.getPrototypeOf(proto)
	}

	return Object.getPrototypeOf(value) === proto
}

/**
 * 检查 `value` 是否为数组。
 *
 * @param value 要检查的值。
 * @returns 如果参数似乎为数组，则返回 `true`。
 */
export function isArray(value: unknown): value is Array<any> {
	return Array.isArray(value)
}

/**
 * 检查 `value` 是否为函数对象。
 *
 * @param value 要检查的值。
 * @returns 如果参数为函数，则返回 `true`，否则返回 `false`。
 */
export function isFunction(value: unknown): value is AnyFunction {
	return typeof value === 'function'
}
