/**
 * 判断给定的字符串是否是一个合法的 URL 地址。
 * @param t 要判断的字符串。
 * @returns 如果给定的字符串是一个合法的 URL 地址，则返回 true；否则返回 false。
 */
export function isUrl(t: string): boolean {
	const pattern = "^((https|http|ftp|rtsp|mms)?://)(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
	return new RegExp(pattern, 'ig').test(t)
}

/**
 * 判断给定的字符串是否是一个合法的邮箱地址。
 * @param email 要判断的字符串。
 * @returns 如果给定的字符串是一个合法的邮箱地址，则返回 true；否则返回 false。
 */
export function isEmail(email: string): boolean {
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return pattern.test(email)
}

/**
 * 在新窗口中打开指定的 URL 地址。
 * @param url 要打开的 URL 地址。
 * @param n 可选的窗口名称，如果未指定，则默认为 "_blank"。
 */
export function openLink(url: string, n = '_blank'): void {
	let e = document.createElement('a')
	e.setAttribute('href', url)
	e.setAttribute('target', n)
	e.setAttribute('rel', 'noreferrer noopener')
	e.setAttribute('id', 'external')
	let r = document.getElementById('external')
	r && document.body.removeChild(r)
	document.body.appendChild(e)
	e.click()
	e.remove()
}

/**
 * 创建一个防抖函数，该函数在一段时间内只会执行一次。
 * @param func 要防抖的函数。
 * @param wait 防抖的时间间隔，单位为毫秒。
 * @param options 可选的参数对象，包含 leading 和 trailing 两个属性，分别表示是否在开始和结束时执行一次。
 * @returns 返回一个防抖函数。
 */
export function debounce(func: {apply: (arg0: any, arg1: any[]) => any}, wait: number, options: {leading: any}) {
	let timeout: number, result: any

	const later = (context: any, args: any) => {
		timeout = null
		if (args) result = func.apply(context, args)
	}

	const debounced = function (this: any, ...args: any[]) {
		if (timeout) clearTimeout(timeout)
		const callNow = !timeout && options.leading
		timeout = setTimeout(later, wait, this, args)
		if (callNow) result = func.apply(this, args)
		return result
	}

	debounced.cancel = function () {
		clearTimeout(timeout)
		timeout = null
	}

	return debounced
}

/**
 * 创建一个节流函数，该函数在一段时间内只会执行一次。
 * @param func 要节流的函数。
 * @param wait 节流的时间间隔，单位为毫秒。
 * @param options 可选的参数对象，包含 leading 和 trailing 两个属性，分别表示是否在开始和结束时执行一次。
 * @returns 返回一个节流函数。
 */
export function throttle(func: {apply: (arg0: any, arg1: any[]) => any}, wait: number, options: {leading: boolean; trailing: boolean}) {
	let timeout: number, context: any, args: any[], result: any
	let previous = 0

	const later = () => {
		previous = options.leading === false ? 0 : Date.now()
		timeout = null
		result = func.apply(context, args)
		if (!timeout) context = args = null
	}

	const throttled = function (this: any, ..._args: any[]) {
		const now = Date.now()
		if (!previous && options.leading === false) previous = now
		const remaining = wait - (now - previous)
		context = this
		args = _args
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout)
				timeout = null
			}
			previous = now
			result = func.apply(context, args)
			if (!timeout) context = args = null
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining)
		}
		return result
	}

	throttled.cancel = function () {
		clearTimeout(timeout)
		previous = 0
		timeout = context = args = null
	}

	return throttled
}

/**
 * 判断给定的身份证号码是否合法。
 * @param idNumber 要判断的身份证号码。
 * @returns 如果身份证号码合法，则返回 true；否则返回 false。
 */
export function isValidIdNumber(idNumber: string): boolean {
	// 正则表达式匹配身份证号码格式
	const pattern = /^[1-9]\d{5}(18|19|20)\d{2}(0\d|1[0-2])([0-2]\d|3[0-1])\d{3}[\dX]$/
	if (!pattern.test(idNumber)) {
		return false
	}

	// 验证身份证号码校验位
	const factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
	const checksums = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
	let sum = 0
	for (let i = 0; i < factors.length; i++) {
		sum += factors[i] * Number(idNumber[i])
	}
	let index = sum % 11
	return idNumber[17] === checksums[index]
}
