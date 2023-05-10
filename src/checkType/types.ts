export type AnyFunction = (...args: any[]) => any
/**
 * Get the toString tag of `value`.
 *
 * @param value The value to query.
 * @returns The toString tag.
 */
function getTag(value: unknown): string {
	return Object.prototype.toString.call(value)
}

/**
 * Checks if `value` is `undefined`.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be `undefined`.
 */
export function isUndefined(value: unknown): value is undefined {
	return value === undefined
}

/**
 * Checks if `value` is `null`.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be `null`.
 */
export function isNull(value: unknown): value is null {
	return value === null
}

/**
 * Checks if `value` is a string.
 *
 * @param value The value to check.
 * @returns `true` if value is a string, otherwise `false`.
 */
export function isString(value: unknown): value is string {
	return getTag(value) === '[object String]'
}

/**
 * Checks if `value` is a number.
 *
 * @param value The value to check.
 * @returns `true` if value is a number, otherwise `false`.
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' || (typeof value === 'object' && value instanceof Number)
}

/**
 * Checks if `value` is a boolean.
 *
 * @param value The value to check.
 * @returns `true` if value is a boolean, otherwise `false`.
 */
export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean'
}

/**
 * Checks if `value` is a symbol.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be a symbol.
 */
export function isSymbol(value: unknown): value is symbol {
	const type = typeof value
	return type == 'symbol' || (type === 'object' && !isNull(value) && getTag(value) === '[object Symbol]')
}

/**
 * Checks if `value` is a `BigInt`.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be a `BigInt`.
 */
export function isBigInt(value: unknown): value is bigint {
	return typeof value === 'bigint'
}

/**
 * Checks if `value` is a object.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be a object.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
	const type = typeof value
	return !isNull(value) && (type === 'object' || type === 'function')
}

/**
 * Checks if `value` is a plain object.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be a plain object.
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
 * Checks if `value` is an array.
 *
 * @param value The value to check.
 * @returns `true` if the argument appears to be an array.
 */
export function isArray(value: unknown): value is Array<any> {
	return Array.isArray(value)
}

/**
 * Checks if `value` is classified as a Function object.
 *
 * @param value The value to check.
 * @returns `true` if value is a function, otherwise `false`.
 */
export function isFunction(value: unknown): value is AnyFunction {
	return typeof value === 'function'
}
