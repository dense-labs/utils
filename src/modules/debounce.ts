/**
 * 防抖函数，该函数在一段时间内只会执行一次。
 * @param func 要防抖的函数。
 * @param wait 防抖的时间间隔，单位为毫秒。
 * @param options 可选的参数对象，options 配置项，可选参数 leading 表示是否在第一次触发时立即执行函数
 * @returns 返回一个防抖后的函数，可通过该函数的 cancel 方法取消防抖
 */
export function debounce(func: any, wait: number, options: {leading?: boolean} = {leading: false}) {
	let timeout: number, result: any

	const later = (context: any, args: any) => {
		timeout = null
		if (args) result = func.apply(context, args)
	}

	const debounced = function (this: any, ...args: any[]) {
		if (timeout) clearTimeout(timeout)
		const callNow = !timeout && options?.leading
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
 * 节流函数，该函数在一段时间内只会执行一次。
 * @param func 要节流的函数。
 * @param wait 节流的时间间隔，单位为毫秒。
 * @param options 可选的参数对象，包含 leading 和 trailing 两个属性，分别表示是否在开始和结束时执行一次。
 * @returns 返回一个节流函, 可通过该函数的 cancel 方法取消节流
 */
export function throttle(func: any, wait: number, options: {leading?: boolean; trailing?: boolean} = {leading: false, trailing: false}) {
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
