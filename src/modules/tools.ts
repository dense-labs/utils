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

export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename'
/**
 * 在新窗口中打开指定的 URL 地址。
 * @param url 要打开的 URL 地址。
 * @param n 可选的窗口名称，如果未指定，则默认为 "_blank"。
 */
export function openLink(url: string, n: Target = '_blank'): void {
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
	const isValid = isValidIdNumber(idCard)
	if (!isValid) {
		throw new Error('Invalid idCard number')
	}
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
	const isValid = isValidIdNumber(idCard)
	if (!isValid) {
		throw new Error('Invalid idCard number')
	}
	const genderCode = parseInt(idCard.substring(16, 17))
	return genderCode % 2 === 0 ? '女' : '男'
}

/**
 * 根据身份证号获取年龄。
 * @param {string} idCard 身份证号。
 * @returns {number} 年龄。
 */
export function getAge(idCard: string): number {
	const isValid = isValidIdNumber(idCard)
	if (!isValid) {
		throw new Error('Invalid idCard number')
	}
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
 * 打乱数组
 *
 * @param {Array} arr - 要打乱的数组
 * @param {Array} arr - 打乱后的书数组是否能和原数组一致
 * @returns {Array} 打乱后的数组
 */
export function shuffleArray(arr: any[], allowSame = false): any[] {
	if (arr.length <= 1) {
		// 只有一个元素，不需要打乱
		return arr
	}
	let shuffled: any[]
	if (allowSame) {
		// 如果允许和原数组相同，则复制原数组并随机交换元素
		shuffled = [...arr]
		for (let i = 0; i < shuffled.length; i++) {
			const j = Math.floor(Math.random() * shuffled.length)
			;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
		}
	} else {
		// 如果不允许和原数组相同，则打乱数组并检查是否与原数组相同
		shuffled = shuffleArray(arr, true)
		while (shuffled.every((value, index) => value === arr[index])) {
			shuffled = shuffleArray(arr, true)
		}
	}
	return shuffled
}
/**
 * 打乱一个对象
 * @param obj 需要打乱的对象
 * @param allowSame 是否允许与原对象相同。如果为 true，则函数会复制原对象并对其进行随机交换。
 * 	如果为 false，则函数会直接对原对象进行随机交换并检查是否与原对象相同。
 * 如果两个对象相同，则函数会递归调用自身直到打乱后的对象与原对象不同为止。
 * @returns 返回随机排序的对象。
 */
export function shuffleObject<T extends Record<string, any>>(obj: T, allowSame = true): T {
	let newObj = allowSame ? JSON.parse(JSON.stringify(obj)) : obj
	let keys = Object.keys(newObj)
	if (keys.length <= 1) {
		return newObj
	}
	for (let i = keys.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[keys[i], keys[j]] = [keys[j], keys[i]]
	}
	let shuffledObj: any = {}
	for (let key of keys) {
		shuffledObj[key] = newObj[key]
	}
	if (!allowSame && JSON.stringify(obj) === JSON.stringify(shuffledObj)) {
		return shuffleObject(obj, allowSame)
	}
	return shuffledObj
}

/**
 * 判断两个值是否相等
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 如果两个值相等，则返回 true，否则返回 false。
 */
export function isEqual(value1: any, value2: any): boolean {
	// 1. 使用 === 运算符判断两个值是否严格相等
	if (value1 === value2) {
		return true
	}

	// 2. 使用 Object.is() 函数判断两个值是否相等
	if (Object.is(value1, value2)) {
		return true
	}

	// 3. 如果两个值都是对象或数组，则递归比较它们的属性和元素
	if (typeof value1 === 'object' && typeof value2 === 'object' && value1 !== null && value2 !== null) {
		const keys1 = Object.keys(value1)
		const keys2 = Object.keys(value2)

		if (keys1.length !== keys2.length) {
			return false
		}

		for (let i = 0; i < keys1.length; i++) {
			const key = keys1[i]

			if (!Object.prototype.hasOwnProperty.call(value1, key) || !isEqual(value1[key], value2[key])) {
				return false
			}
		}

		return true
	}

	// 如果以上都不满足，则认为两个值不相等
	return false
}

/**
 * 将数字转换成千位分隔符格式的字符串
 * @param num 需要格式化的数字
 * @param symbol 分隔符，默认使用逗号
 * @returns 返回格式化后的字符串
 */
export function formatCurrency(num: number, symbol = ','): string {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol)
}
