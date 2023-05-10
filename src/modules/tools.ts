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
 * 将对象序列化为 URL 编码字符串
 * @param data 要序列化的对象
 * @returns URL 编码字符串
 */
export function serialize(data: {[key: string]: any}): string {
	let list: string[] = []
	Object.keys(data).forEach((ele: string) => {
		list.push(`${ele}=${data[ele]}`)
	})
	return list.join('&')
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

/**
 * 根据身份证号获取出生日期。
 * @param {string} idCard 身份证号。
 * @returns {string} 出生日期，格式为 yyyy-mm-dd。
 */
export function getBirthDate(idCard: string): string {
	if (!isValidIdNumber(idCard)) return
	const year = idCard.substring(6, 10)
	const month = idCard.substring(10, 12)
	const day = idCard.substring(12, 14)
	return year + '-' + month + '-' + day
}

/**
 * 根据身份证号获取性别。
 * @param {string} idCard 身份证号。
 * @returns {string} 性别，值为 '男' 或 '女'。
 */
export function getGender(idCard: string): string {
	if (!isValidIdNumber(idCard)) return
	const genderCode = parseInt(idCard.substring(16, 17))
	return genderCode % 2 === 0 ? '女' : '男'
}

/**
 * 根据身份证号获取年龄。
 * @param {string} idCard 身份证号。
 * @returns {number} 年龄。
 */
export function getAge(idCard: string): number {
	if (!isValidIdNumber(idCard)) return
	const birthDate = new Date(getBirthDate(idCard))
	const diff = Date.now() - birthDate.getTime()
	const ageDate = new Date(diff)
	return Math.abs(ageDate.getUTCFullYear() - 1970)
}

/**
 * 生成 UUID（通用唯一标识符）。
 * UUID 是用于在计算机系统中标识信息的标准方式之一。
 * @returns {string} 生成的 UUID。
 */
export function generateUUID(): string {
	let d = new Date().getTime()
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		d += performance.now() // 如果可用，使用高精度计时器
	}
	const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
	})
	return uuid
}

/**
 * 根据参数名称从 URL 中获取参数值。
 * @param {string} name 参数名称。
 * @returns {string} 参数值，如果没有找到，则返回 null。
 */
export function getUrlParameter(url: string, name: string): string | null {
	const urls = url.split('?')[1] || url.split('#')[1]
	if (!urls) return null
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	const r = urls.match(reg)
	if (r != null) return decodeURIComponent(r[2])
	return null
}

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
 * 根据用户代理字符串判断当前设备是否为移动设备。
 * @returns {boolean} 如果当前设备为移动设备，则返回 true；否则返回 false。
 */
export const isMobile = typeof window === 'undefined' ? false : /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)

/**
 * 打乱数组
 *
 * @param {Array} arr - 要打乱的数组
 * @returns {Array} 打乱后的数组
 */
export function shuffle(arr: any[]) {
	return arr.sort(() => Math.random() - 0.5)
}

/**
 * 打乱对象属性的顺序
 *
 * @param {Object} obj - 要打乱属性顺序的对象
 * @returns {Object} 打乱属性顺序后的对象
 */
export function shuffleObjectProperties(obj: {[x: string]: any}) {
	const keys = Object.keys(obj)
	shuffle(keys)
	const result: any = {}
	keys.forEach((key) => {
		result[key] = obj[key]
	})
	return result
}
