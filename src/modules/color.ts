/**
 * 生成指定格式的随机颜色字符串。
 * @param type 要生成的颜色字符串的格式。可以是 'hsl'、'hsla'、'rgb'、'rgba'、'16' 或 undefined。默认为 'rgb'。
 * @returns 指定格式的随机颜色字符串。
 */
export function genRandomColor(type: 'hsl' | 'hsla' | 'rgb' | 'rgba' | 16 | '16' | undefined): string {
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
