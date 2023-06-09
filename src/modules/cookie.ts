/**
 * 获取指定名称的 cookie 值
 * @param name cookie 的名称
 * @returns 如果找到了指定名称的 cookie，则返回其值；否则返回 null
 */
export function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
	return match ? match[2] : null
}

/**
 * 设置一个新的 cookie
 * @param name 要设置的 cookie 的名称
 * @param value 要设置的 cookie 的值
 * @param expires 可选，要设置的 cookie 的过期时间
 */
export function setCookie(name: string, value: string, expires?: Date): void {
	let cookie = name + '=' + value
	if (expires) {
		cookie += '; expires=' + expires.toUTCString()
	}
	document.cookie = cookie
}

/**
 * 删除指定名称的 cookie
 * @param name 要删除的 cookie 的名称
 */
export function deleteCookie(name: string): void {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

/**
 * 检查指定名称的 cookie 是否存在
 * @param name 要检查的 cookie 的名称
 * @returns 如果指定名称的 cookie 存在，则返回 true；否则返回 false
 */
export function hasCookie(name: string): boolean {
	return getCookie(name) !== null
}
