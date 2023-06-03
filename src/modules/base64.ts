/**
 * 将图片 URL 转换为 Base64 编码
 * @param url 图片 URL
 * @returns Base64 编码的字符串
 */
export function imageUrlToBase64(url: string): Promise<string> {
	const image = new Image()
	return new Promise<string>((resolve, reject) => {
		image.addEventListener('load', () => {
			const canvas = document.createElement('canvas')
			canvas.width = image.width
			canvas.height = image.height
			const context = canvas.getContext('2d')
			if (context) {
				context.drawImage(image, 0, 0)
				const base64Data = canvas.toDataURL()
				resolve(base64Data)
			} else {
				reject(new Error('Failed to convert image URL to Base64'))
			}
		})
		image.addEventListener('error', () => {
			reject(new Error('Failed to load image'))
		})
		image.src = url
	})
}

/**
 * 将 Base64 编码的字符串转换为 Blob 对象
 * @param base64Data Base64 编码的字符串
 * @param contentType Blob 对象的 MIME 类型
 * @returns Blob 对象
 */
export function base64ToBlob(base64Data: string, contentType = ''): Blob {
	const byteCharacters = atob(base64Data)
	const byteArrays = []
	for (let i = 0; i < byteCharacters.length; i++) {
		byteArrays.push(byteCharacters.charCodeAt(i))
	}
	const byteArray = new Uint8Array(byteArrays)
	return new Blob([byteArray], {type: contentType})
}
