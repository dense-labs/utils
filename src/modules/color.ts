/**
 * 生成一个随机的 RGB 颜色值。
 * @returns 随机的 RGB 颜色值，格式为 "rgb(r, g, b)"。
 */
export function getRandomColor(): string {
	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)
	return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

/**
 * 将 RGB 颜色值转换为对应的 HEX 颜色值。
 * @param rgb 要转换的 RGB 颜色值，格式为 "rgb(r, g, b)"。
 * @returns 对应的 HEX 颜色值，格式为 "#rrggbb"。
 */
export function rgbToHex(rgb: string): string {
	let components = rgb.match(/\d+/g)
	let r = parseInt(components[0], 10)
	let g = parseInt(components[1], 10)
	let b = parseInt(components[2], 10)
	let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
	return hex
}

/**
 * 将 RGB 颜色值转换为对应的 RGBA 颜色值。
 * @param rgb 要转换的 RGB 颜色值，格式为 "rgb(r, g, b)"。
 * @param opacity 透明度值，取值范围为 0-1 或者字符串类型的百分比值（例如 "0.5" 或 "50%"）。
 * @returns 对应的 RGBA 颜色值，格式为 "rgba(r, g, b, a)"。
 */
export function rgbToRgba(rgb: string, opacity: string | number): string {
	let components = rgb.match(/\d+/g)
	let r = parseInt(components[0], 10)
	let g = parseInt(components[1], 10)
	let b = parseInt(components[2], 10)
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')'
}

// Example usage
/* let color = getRandomColor()
console.log(color) // outputs "rgb(123, 45, 67)"
console.log(rgbToHex(color)) // outputs "#7b2d43"
console.log(rgbToRgba(color, 0.5)) // outputs "rgba(123, 45, 67, 0.5)" */

/**
 * 生成指定格式的随机颜色字符串。
 * @param type 要生成的颜色字符串的格式。可以是 'hsl'、'hsla'、'rgb'、'rgba'、'16' 或 undefined。默认为 'rgb'。
 * @returns 指定格式的随机颜色字符串。
 */
export function genRandomColor(type: 'hsl' | 'hsla' | 'rgb' | 'rgba' | 16 | '16' | undefined) {
	const genColorObj = {
		hsl: 'hsl(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 100) + '%,' + Math.round(Math.random() * 100) + '%)',
		hsla: 'hsla(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 100) + '%,' + Math.round(Math.random() * 100) + '%,' + ((Math.random() * 10) / 10).toFixed(1) + ')',
		rgb: 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')',
		rgba: 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + ((Math.random() * 10) / 10).toFixed(1) + ')',
		16: '#' + Math.random().toString(16).substring(2, 8)
	}
	if (!type) {
		return genColorObj['rgb']
	}
	if (['hsl', 'hsla', 'rgb', 'rgba', '16', 16].includes(type)) {
		return genColorObj[type]
	}
}
